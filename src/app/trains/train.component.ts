import {TRAIN_GET_ALL} from "../store/train/train.action";
import {TrainService} from "../service/train.service";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Train} from "../model/train.model";
import {Store} from "@ngrx/store";
import {IAppState} from "../store/index";
import {TrainCompositionService} from "../service/traincomposition.service";
import {TrainDisplay} from "../model/traindisplay.model";
import {TRAIN_DISPLAY_GET_ALL, REMOVE_DISPLAY_TRAINS} from "../store/traindisplay/traindisplay.action";
import {JourneySections} from "../model/traincomposition.model";
/**
 * Component of type TrainComponent responsible for observing Train and TrainDisplay Store
 * OnInit The action TRAIN_GET_ALL is dispatched, the train$ observable is subscribed to get live data
 * using which is used to create DISPLAY OBJECT. The display object is also saved in store so that it provides
 * observable which could be passed to child component so that the future changes are reflected
 * cleanUP and emitted methods to be used per need (for cleaning the store and retreiving selected data respectively.)
 * */

@Component({
  selector: 'trains',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
  providers:[TrainService,TrainCompositionService]

})
export class TrainComponent implements OnInit {
  private td:TrainDisplay;
  trains$: Observable<Array<Train>>;
  trainsDisplay$: Observable<Array<TrainDisplay>>;

  constructor(public store: Store<IAppState>, private service:TrainCompositionService) {
    console.log('before init'+this.trains$);
    this.trains$ = this.store.select('train');
    this.trainsDisplay$ = this.store.select('trainDisplay');
  }


  ngOnInit() {
    console.log('train component initialized ');
    this.store.dispatch({
      type: TRAIN_GET_ALL
    });
    this.cleanUP();
    this.getTrainDisplay();
  }
  /** Subscribe to train observable and get data for train display*/
  getTrainDisplay(){
    this.trains$.subscribe(data=>data.forEach(res=>this.service
      .getAllTrainComposition(res.trainNumber,res.departureDate)
      .subscribe(data => {
        if(data.journeySections){
          data.journeySections.forEach(data=>{
            this.createTrainDisplay(res.trainType, res.trainNumber,res.runningCurrently, data);

          })
        } else {
          this.td = new TrainDisplay(res.trainType,res.trainNumber);
          //this.cleanUp(res.trainType, res.trainNumber);
        }
        this.store.dispatch({type:TRAIN_DISPLAY_GET_ALL, payload:this.td})
      })));
  }
  createTrainDisplay(trainType:string,trainNumber:number,moving:boolean, data:JourneySections){
    this.td =  new TrainDisplay(trainType, trainNumber,moving, data.beginTimeTableRow.stationShortCode,
      data.endTimeTableRow.stationShortCode, data.locomotives,data.wagons,data.maximumSpeed,
      data.totalLength);
  }
  /** clean up Train Display reducer .... */
  cleanUP(){
    this.store.dispatch({type:REMOVE_DISPLAY_TRAINS, payload:[]})
  }
 /** event emitted method */

  emitted($event){
    console.log('The list clicked is: ')
    console.log($event);
  }


}

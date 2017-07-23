import {TRAIN_GET_ALL} from "../store/train/train.action";
import {TrainService} from "./train.service";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Train} from "./train.model";
import {Store} from "@ngrx/store";
import {IAppState} from "../store/index";
import {TrainCompositionService} from "./traincomposition.service";
import {TrainDisplay} from "./traindisplay.model";
import {TRAIN_DISPLAY_GET_ALL} from "../store/traindisplay/traindisplay.action";

@Component({
  selector: 'app-trains',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
  providers:[TrainService,TrainCompositionService]

})
export class TrainComponent implements OnInit {
  private td:TrainDisplay;
  trains$: Observable<Array<Train>>;
  trainsDisplay$: Observable<Array<TrainDisplay>>;
  //dummyPaper:IPaper=null;

  constructor(public store: Store<IAppState>, private service:TrainCompositionService) {
    console.log('before init'+this.trains$);
    this.trains$ = this.store.select('train');
    this.trainsDisplay$ = this.store.select('trainDisplay');
  }


  ngOnInit() {
    console.log('train component initialized ');
    this.store.dispatch({
      type: TRAIN_GET_ALL
      //payload:{data:'none'}
    });
    this.trains$.subscribe(data=>data.forEach(res=>this.service
      .getAllTrainComposition(res.trainNumber,res.departureDate)
      .subscribe(data => {
        if(data.journeySections){
          data.journeySections.forEach(data=>{
               this.td =  new TrainDisplay(res.trainType, res.trainNumber, data.beginTimeTableRow.stationShortCode,data.endTimeTableRow.stationShortCode,
                data.locomotives[0].locomotiveType, data.maximumSpeed, data.totalLength);
              this.store.dispatch({type:TRAIN_DISPLAY_GET_ALL, payload:this.td})
          })
        } else {
          this.cleanUp(res.trainType, res.trainNumber);
        }

      })));
  }
  cleanUp(trainType:string, trainNumber:number){
    console.log('no journey sections found');
    this.td = new TrainDisplay(trainType,trainNumber);
    this.store.dispatch({type:TRAIN_DISPLAY_GET_ALL, payload:this.td})
  }

}

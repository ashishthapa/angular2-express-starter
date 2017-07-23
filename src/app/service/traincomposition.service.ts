import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {TrainComposition} from "../model/traincomposition.model";
import {IAppState} from "../store/index";
import {Store} from "@ngrx/store";
import {REMOVE_DISPLAY_TRAINS} from "../store/traindisplay/traindisplay.action";
/**
 * Created by athapa on 21/07/2017.
 */
/**
 * Service to get TrainComposition, returns observable of type TrainComposition which is stored in TrainDisplay Store
 * Data in store retreived from trainDisplay Reducer
 * */
@Injectable()
export class TrainCompositionService{
  private pre_url:string = 'https://rata.digitraffic.fi/api/v1/compositions/';
  private post_url:string = '?departure_date=';
  private trainComposition:TrainComposition
  constructor(private http:Http, private store:Store<IAppState>){

  }
  getAllTrainComposition(trainNum:number, date:string):Observable<TrainComposition>{
    console.log('inside train compostion')
    return this.http.get(this.pre_url+trainNum+this.post_url+date)
      .map(res => res.json());
  }

}

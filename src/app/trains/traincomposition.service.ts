import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {TrainComposition} from "./traincomposition.model";
/**
 * Created by athapa on 21/07/2017.
 */

@Injectable()
export class TrainCompositionService{
  private pre_url:string = 'https://rata.digitraffic.fi/api/v1/compositions/';
  private post_url:string = '?departure_date=';
  private trainComposition:TrainComposition
  constructor(private http:Http){

  }
  getAllTrainComposition(trainNum:number, date:string):Observable<TrainComposition>{
    console.log('inside train compostion')
    return this.http.get(this.pre_url+trainNum+this.post_url+date)
      .map(res => res.json());
  }

}

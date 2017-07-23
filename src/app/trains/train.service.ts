import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Train} from "./train.model";
/**
 * Created by athapa on 20/07/2017.
 */


@Injectable()
export class TrainService{
  private url:string = 'https://rata.digitraffic.fi/api/v1/live-trains?station=SLO';
  constructor(private http:Http){

  }
  getAllTrains():Observable<Array<Train>>{
      console.log('inside train service')
     return this.http.get(this.url)
      .map(res => res.json());
  }
}

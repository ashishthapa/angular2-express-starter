/**
 * Created by athapa on 11/08/2017.
 */



import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class FeedService{

  public constructor(private http:Http){

  }
  getFeedData():Observable<any>{
    console.log('inside feed service');
    return this.http.get('/api/feeds/').map(data=>{
      return data;
    })
  }

}

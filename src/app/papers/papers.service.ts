/**
 * Created by athapa on 23/05/2017.
 */


import {Injectable} from "@angular/core";
import {Http,Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import  "rxjs/add/operator/map";
import {Actions } from '@ngrx/effects'

import {IPaper} from "../store/paper/paper.reducer";

@Injectable()
export class PaperService{
  private url:string = '/api/paper';
  constructor(private http:Http){

  }
  getAllPapers():Observable<Array<IPaper>>{
    /*return this.http.get(`/api/paper`, {
      headers: new Headers({
        'Accept': 'application/json'
        })
      })
      .map(res=><IPaper[]>res.json())*/
    return this.http.get('/api/paper')
      .map(res => res.json());
  }

  updatePaper(payload:IPaper):Observable<IPaper> {
    console.log('inside upate paper, paper service', payload);
    return this.http.post('api/paper/update',payload, {
      headers:new Headers({
        'Accept':'application/json'
      })
    }).map(res=> res.json());
  }


}

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IAppState } from './store/index';
import {Feed, Feeds} from "./model/feed.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  observable$: Observable<{}>;

  constructor(private http: Http, store: Store<IAppState>) {
     //http
      //.get('/api/public/simple')
      //.map((response: Response) => response.json())
       //.subscribe(data=>console.log(data));


  }

}

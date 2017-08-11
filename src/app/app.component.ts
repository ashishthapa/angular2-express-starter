import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IAppState } from './store/index';
import {USER_GET} from "./store/profile/profile.actions";
import {Feed, Feeds} from "./model/feed.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  observable$: Observable<{}>;

  constructor(private http: Http, store: Store<IAppState>) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());

    store.dispatch({
      type: USER_GET,
      payload:null
    });
  }
  ngOnInit() {
    let text='';
    let date= '';
    let key = null;
    let value = null;
    let index:number=null;
    let firstT:string='';
    let textArray:Array<string>=null;
    let feeds:Feeds=null;
    let feed:Feed= null;
    let feedArray:Feed[]=[];
    console.log('on init called');
    this.http.get('https://crossorigin.me/http://tuftuf.gambitlabs.fi/feed.txt')
      .map(res => res)
      .subscribe(
        data => {
          text = data.text();
          date = text.substr(0,text.indexOf('\n'));
          console.log('The date is '+ date+ "It has :" +date.length+'characters');
          index = date.length+1;
          firstT = text.substr(index);
          //console.log(firstT.substr(index, firstT.indexOf('/\r\n|\r|\n/')));
          let textArray = firstT.split(/\r\n|\r|\n/);
          for(var i=0;i<textArray.length-1;i++) {
            key = textArray[i].substr(0,textArray[i].indexOf(':'));
            value  = textArray[i].substr(textArray[i].indexOf(':')+1);
            //console.log(key, value);
            //console.log('Key ' + textArray[i].substr(0,textArray[i].indexOf(':'))
            //  + ' Value '+textArray[i].substr(textArray[i].indexOf(':')+1));
            feed = new Feed(key, value);
            console.log(feed);
            feedArray.push(feed);
          }
          console.log(feedArray);
            feeds = new Feeds(date, feedArray);
            console.log(feeds);
        });
}
}

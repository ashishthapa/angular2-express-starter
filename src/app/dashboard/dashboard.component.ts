import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../store';
import {Feeds, Feed} from "../model/feed.model";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 private feeds:Feeds=null;

  feeds$: Observable<{}>;

  constructor(private http:Http, public store: Store<IAppState>) {
    http
      .get('/api/feeds/')
      .map(res=>res)
      .subscribe(data=>{console.log(data.text())});

  }
  ngOnInit() {
    let text='';
    let date= '';
    let key = null;
    let value = null;
    let index:number=null;
    let firstT:string='';
    let textArray:Array<string>=null;
    let feed:Feed= null;
    let feedArray:Feed[]=[];
    console.log('on init called');
   /** this.http.get('https://crossorigin.me/http://tuftuf.gambitlabs.fi/feed.txt')
      .map(res => res)
      .subscribe(
        data => {
          text = data.text();
          */
   this.http
     .get('/api/feeds/')
     .map(res=>res)
     .subscribe(data=>{console.log(data.text())
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
          this.feeds = new Feeds(date, feedArray);
          console.log(this.feeds);
        });
  }


}

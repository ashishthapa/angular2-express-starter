import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../store';
import {Feeds, Feed, IFeeds} from "../model/feed.model";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 feeds:Feeds=null;


  constructor(private http:Http) {
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

   this.http.get('/api/feeds/')
     .map(res=>res)
     .subscribe(data=>{
       text = data.text();
        date = text.substr(0,text.indexOf('\n'));
          index = date.length+1;
          firstT = text.substr(index);
          let textArray = firstT.split(/\r\n|\r|\n/);
          for(var i=0;i<textArray.length-1;i++) {

            textArray[i].trim();
            let keyValueArray = textArray[i].split(':');
            let key = keyValueArray[0];
            let value = keyValueArray[1];
            console.log(key, value)

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

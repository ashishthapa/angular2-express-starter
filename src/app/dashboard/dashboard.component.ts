import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import {Feeds, Feed, IFeeds} from "../model/feed.model";
import {Http, Response} from "@angular/http";
import {FeedService} from "../services/feeds.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    FeedService
  ],
})
export class DashboardComponent {
  feeds: Feeds = null;
  private errorMessage:string;
  private text = '';
  private date = '';
  private key = null;
  private value = null;
  private index: number = null;
  private firstT: string = '';
  private textArray: Array<string> = null;
  private feed: Feed = null;
  private feedArray: Feed[] = [];


  constructor(private http: Http, private feedService: FeedService) {
    //console.log(this.feedService.getFeedData().map(data=>data).subscribe(data=>{console.log(data.text())}));
  }

  ngOnInit() {

    /**
     this.http.get('/api/feeds/')
     .map(res=>res).subscribe(data=>{
     */
    this.feedService.getFeedData()
      .map(data => data).subscribe(data => {
      this.text = data.text();
      this.handleData(this.text);
    },
      err => { this.handleError(err);},
      () => { console.log('Completed'); }
    );
  }

  private handleData(text:string){
    console.log('Here is the data ' +text);
    this.date = text.substr(0, text.indexOf('\n'));
    this.index = this.date.length + 1;
    this.firstT = text.substr(this.index);
    let textArray = this.firstT.split(/\r\n|\r|\n/);
    for (var i = 0; i < textArray.length - 1; i++) {
      textArray[i].trim();
      let keyValueArray = textArray[i].split(':');
      let key = keyValueArray[0];
      let value = keyValueArray[1];
      this.feed = new Feed(key, value);
      this.feedArray.push(this.feed);
    }
    this.feeds = new Feeds(this.date, this.feedArray);

  }
  private handleError(err:Error){
      console.log(err.message);
  }

}

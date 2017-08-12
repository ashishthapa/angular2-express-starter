/**
 * Created by athapa on 12/08/2017.
 */

import {Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';


import {Http, Response} from "@angular/http";
import {IFeeds} from "../model/feed.model";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  internalFeed:IFeeds;

  public constructor(){}


  @Input() set display(feed:IFeeds) {
    this.internalFeed = Object.assign({}, feed);
  }
}

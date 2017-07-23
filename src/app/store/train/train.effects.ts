/**
 * Created by athapa on 20/07/2017.
 */

import {Injectable} from "@angular/core";
import { Effect, Actions, toPayload } from '@ngrx/effects'
import { Action } from '@ngrx/store';
import {
  TRAIN_GET_ALL, TRAIN_GET_ALL_SUCCESS, TRAIN_GET_ALL_FAIL
} from "./train.action";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs";
import {TrainService} from "../../service/train.service";

@Injectable()
export class TrainEffects {

  constructor(private action$:Actions, private trainService:TrainService){}

  @Effect()
  trainGetAll$ = this.action$.ofType(TRAIN_GET_ALL).
  switchMap(() => this.trainService.getAllTrains())
   .map(trains => ({ type:TRAIN_GET_ALL_SUCCESS, payload:trains}));

}

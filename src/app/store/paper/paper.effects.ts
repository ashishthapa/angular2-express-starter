/**
 * Created by athapa on 20/05/2017.
 */




import {Injectable} from "@angular/core";
import { Effect, Actions, toPayload } from '@ngrx/effects'
import { Action } from '@ngrx/store';
import {
  PAPER_GET_ALL, PAPER_GET_ALL_SUCCESS, PAPER_GET_ALL_FAIL, PAPER_UPDATE,
  PAPER_UPDATE_FAIL, PAPER_UPDATE_SUCCESS
} from "./paper.actions";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs";
import {PaperService} from "../../papers/papers.service";

@Injectable()
export class PaperEffects {

  constructor(private action$:Actions, private paperService:PaperService){}

  @Effect()
  papersGetAll$ = this.action$.ofType(PAPER_GET_ALL).
                  switchMap(() => this.paperService.getAllPapers())
                   .map(papers => ({ type:PAPER_GET_ALL_SUCCESS, payload:papers}));






  @Effect()
  paperUpdate$ = this.action$.ofType(PAPER_UPDATE).map(toPayload).switchMap((payload)=> {
                return this.paperService.updatePaper(payload)
                  .map((res)=>({ type:PAPER_UPDATE_SUCCESS, payload:res}))

  })
}

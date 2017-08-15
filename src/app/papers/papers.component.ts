import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../store/index";
import {Observable} from "rxjs";
import {
  PAPER_GET_ALL, PAPER_GET_ALL_SUCCESS, PAPER_UPDATE, PAPER_UPDATE_SELECTED,
  PAPER_UPDATE_CANCELLED
} from "../store/paper/paper.actions";
import {IPaper} from "../store/paper/paper.reducer";
import {PaperService} from "./papers.service";
import {USER_GET} from "../store/profile/profile.actions";

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css'],
  providers:[PaperService]

})
export class PapersComponent implements OnInit {
  papers$: Observable<Array<IPaper>>;
  selectedPaper$:Observable<IPaper>;
  dummyPaper:IPaper=null;

  constructor(public store: Store<IAppState>, private paperService:PaperService) {

    this.papers$ = this.store.select('paper');
    this.selectedPaper$ = this.store.select('selectedPaper');
  }


  ngOnInit() {
    console.log('paper component initialized ');

    this.store.dispatch({
      type: PAPER_GET_ALL,
      payload:{data:'none'}
    });

  }
  selectPaper($event){
    console.log($event);
    this.store.dispatch({type:PAPER_UPDATE_SELECTED, payload:$event});
  }
  selectedUpdate($event){
    console.log($event);
    this.store.dispatch({type:PAPER_UPDATE, payload:{id:$event.paperID,info:$event.inf, subject:$event.sub}});
    //this.selectedPaper$.subscribe(data=>{console.log(data)});
  }
  resetForm($event){
    console.log($event)
    this.store.dispatch({type:PAPER_UPDATE_CANCELLED,payload:this.dummyPaper})
  }
}

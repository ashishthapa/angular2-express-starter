import {TRAIN_GET_ALL} from "../store/train/train.action";
import {TrainService} from "./train.service";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Train} from "./train.model";
import {Store} from "@ngrx/store";
import {IAppState} from "../store/index";

@Component({
  selector: 'app-trains',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
  providers:[TrainService]

})
export class PapersComponent implements OnInit {
  trains$: Observable<Array<Train>>;
  //dummyPaper:IPaper=null;

  constructor(public store: Store<IAppState>, private paperService:TrainService) {

    this.trains$ = this.store.select('train');
  }


  ngOnInit() {
    console.log('paper component initialized ');
    this.store.dispatch({
      type: TRAIN_GET_ALL,
      payload:{data:'none'}
    });

  }

}

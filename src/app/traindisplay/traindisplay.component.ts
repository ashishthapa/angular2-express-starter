import {Component, ChangeDetectionStrategy, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {TrainDisplay} from "../model/traindisplay.model";
/**
 * Created by athapa on 22/07/2017.
 */

@Component({
  selector: 'train-display',
  templateUrl: './traindisplay.component.html',
  styleUrls: ['./traindisplay.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainDisplayComponent implements OnInit {

  @Input() trainDisplays:Array<TrainDisplay>;
  @Output() emitted = new EventEmitter<TrainDisplay>();

  constructor() { }

  ngOnInit() {

  }
  emit(train:TrainDisplay){
    console.log(train);
    this.emitted.emit(train);
  }

}

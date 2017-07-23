import {Component, ChangeDetectionStrategy, OnInit, Input} from "@angular/core";
import {TrainDisplay} from "../trains/traindisplay.model";
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


  constructor() { }

  ngOnInit() {

  }

}

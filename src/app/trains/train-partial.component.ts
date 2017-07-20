/**
 * Created by athapa on 20/07/2017.
 */

import {Component, Input} from "@angular/core";
import {Train} from "./train.model";

@Component({
  selector:'train-partials',
  templateUrl:'./train-partial.html'
})
export class TrainPartial{

  @Input() trains:Array<Train>;
}

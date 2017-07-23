import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TrainComponent} from "./train.component";
import {routing} from "./train.router";
import {TrainDisplayComponent} from "../traindisplay/traindisplay.component";
/**
 * Created by athapa on 20/07/2017.
 */

@NgModule({
  imports:[
    CommonModule,
    routing,

  ],
  declarations:[TrainComponent, TrainDisplayComponent],
  bootstrap:[TrainComponent]
})
export class TrainModule{

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisplayComponent} from "./display.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    DisplayComponent
  ],

  declarations: [
  DisplayComponent
],
  bootstrap: [
  DisplayComponent
]
})
export class DisplayModule { }

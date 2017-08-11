/**
 * Created by athapa on 07/08/2017.
 */


import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {routing} from "./library.router";
import {LibraryComponent} from "./library.component";


@NgModule({
  imports:[
    CommonModule,
    routing,

  ],
  declarations:[LibraryComponent],
  bootstrap:[LibraryComponent]
})
export class LibraryModule{

}

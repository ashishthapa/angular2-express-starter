/**
 * Created by athapa on 20/05/2017.
 */

import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {PapersComponent} from "./papers.component";
import {routing} from "./papers.router";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports:[
    CommonModule,
    routing,
    FormsModule
  ],
  declarations:[PapersComponent],
  bootstrap:[PapersComponent]
})
export class PapersModule{

}

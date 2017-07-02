/**
 * Created by athapa on 20/05/2017.
 */

import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {PapersComponent} from "./papers.component";
import {routing} from "./papers.router";
import {PaperPartialsComponent} from "../paper-partials/paper-partials.component";
import {FormsModule} from "@angular/forms";
import {PaperDetailComponent} from "../paper-detail/paper-detail.component";


@NgModule({
  imports:[
    CommonModule,
    routing,
    FormsModule
  ],
  declarations:[PapersComponent, PaperPartialsComponent, PaperDetailComponent],
  bootstrap:[PapersComponent]
})
export class PapersModule{

}

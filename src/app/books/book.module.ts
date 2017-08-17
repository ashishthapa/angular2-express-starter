/**
 * Created by athapa on 15/08/2017.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./book.router";
import {BookComponent} from "./book.component";
import {SharedModule} from "../shared/shared.module";
import {BookService} from "../service/book.service";


@NgModule({
  imports:[
    CommonModule,
    SharedModule,
    routing
  ],
  declarations:[
    BookComponent
  ],
  providers:[
    BookService
  ],
  bootstrap:[
    BookComponent
  ]

})
export class BookModule{

}

/**
 * Created by athapa on 15/08/2017.
 */
import {Route, RouterModule} from '@angular/router'
import {BookComponent} from "./book.component";
import {ModuleWithProviders} from "@angular/core";

 const routes:Route[]= [
  {
    path:'',
    component:BookComponent
  }
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

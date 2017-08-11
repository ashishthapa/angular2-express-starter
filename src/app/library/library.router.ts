/**
 * Created by athapa on 07/08/2017.
 */


import {Routes, RouterModule, Route} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LibraryComponent} from "./library.component";


const routes:Route[]=  [{

  path:'',
  component:LibraryComponent

}];


export const routing:ModuleWithProviders = RouterModule.forChild(routes)

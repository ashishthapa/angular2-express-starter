import {TrainComponent} from "./train.component";
import {Route, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by athapa on 20/07/2017.
 */
const routes:Route[]=  [{

  path:'',
  component:TrainComponent

}];


export const routing:ModuleWithProviders = RouterModule.forChild(routes)

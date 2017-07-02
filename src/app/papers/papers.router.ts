/**
 * Created by athapa on 20/05/2017.
 */


import {Routes, RouterModule, Route} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {PapersComponent} from "./papers.component";


const routes:Route[]=  [{

    path:'',
    component:PapersComponent

}];


export const routing:ModuleWithProviders = RouterModule.forChild(routes)

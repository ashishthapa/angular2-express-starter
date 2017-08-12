/**
 * Created by athapa on 12/08/2017.
 */
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DisplayComponent} from './display.component';

const routes: Route[] = [
  {
    path: '',
    component: DisplayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

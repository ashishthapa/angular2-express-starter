import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {BookModule} from "./books/book.module";

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren:'app/books/book.module#BookModule', path:'books'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);

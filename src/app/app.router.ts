import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'app/papers/papers.module#PapersModule', path: 'paper' },
  { loadChildren: 'app/trains/train.module#TrainModule', path: 'train' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);

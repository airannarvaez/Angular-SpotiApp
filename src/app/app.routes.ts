import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export const routings = RouterModule.forRoot(routes);

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rh45Component } from './rh-45/rh-45.component';
import { Rh58Component } from './rh-58/rh-58.component';
import { Rh77Component } from './rh-77/rh-77.component';
import { Rhe45Component } from './rhe-45/rhe-45.component';
import { Rhe58Component } from './rhe-58/rhe-58.component';
import { Rhe56Component } from './rhe-56/rhe-56.component';
import { Rhe84Component } from './rhe-84/rhe-84.component';

const routes: Routes = [
  { path: 'catalog/rollet/aluminium/rh-45', component: Rh45Component },
  { path: 'catalog/rollet/aluminium/rh-58', component: Rh58Component },
  { path: 'catalog/rollet/aluminium/rh-77', component: Rh77Component },
  { path: 'catalog/rollet/aluminium/rhe-45', component: Rhe45Component },
  { path: 'catalog/rollet/aluminium/rhe-58', component: Rhe58Component },
  { path: 'catalog/rollet/aluminium/rhe-56', component: Rhe56Component },
  { path: 'catalog/rollet/aluminium/rhe-84', component: Rhe84Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AluminiumRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sliding500Component } from './sliding-500/sliding-500.component';
import { Sliding800Component } from './sliding-800/sliding-800.component';
import { Sliding1300proComponent } from './sliding-1300pro/sliding-1300pro.component';
import { Sliding2100proComponent } from './sliding-2100pro/sliding-2100pro.component';

const routes: Routes = [
  { path: 'catalog/avtomatica/sliding/sliding-500', component: Sliding500Component },
  { path: 'catalog/avtomatica/sliding/sliding-800', component: Sliding800Component },
  { path: 'catalog/avtomatica/sliding/sliding-1300pro', component: Sliding1300proComponent },
  { path: 'catalog/avtomatica/sliding/sliding-2100pro', component: Sliding2100proComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidingRoutingModule { }

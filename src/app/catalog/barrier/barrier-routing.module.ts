import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarrierComponent } from './barrier/barrier.component';
import { ChainBarrierComponent } from './chain-barrier/chain-barrier.component';

const routes: Routes = [
  { path: 'catalog/barrier/barrier', component: BarrierComponent },
  { path: 'catalog/barrier/chain-barrier', component: ChainBarrierComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarrierRoutingModule { }

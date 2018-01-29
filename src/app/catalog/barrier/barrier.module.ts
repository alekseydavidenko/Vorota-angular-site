import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarrierRoutingModule } from './barrier-routing.module';
import { BarrierComponent } from './barrier.component';
import { BarrierComponent as BComponent } from './barrier/barrier.component';
import { ChainBarrierComponent } from './chain-barrier/chain-barrier.component';

@NgModule({
  imports: [
    CommonModule,
    BarrierRoutingModule
  ],
  declarations: [BarrierComponent, BComponent, ChainBarrierComponent]
})
export class BarrierModule { }

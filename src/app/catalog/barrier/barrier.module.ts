import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarrierRoutingModule } from './barrier-routing.module';
import { BarrierComponent } from './barrier.component';

@NgModule({
  imports: [
    CommonModule,
    BarrierRoutingModule
  ],
  declarations: [BarrierComponent]
})
export class BarrierModule { }

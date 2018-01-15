import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransshipmentRoutingModule } from './transshipment-routing.module';
import { TransshipmentComponent } from './transshipment.component';

@NgModule({
  imports: [
    CommonModule,
    TransshipmentRoutingModule
  ],
  declarations: [TransshipmentComponent]
})
export class TransshipmentModule { }

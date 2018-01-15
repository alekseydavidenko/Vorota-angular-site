import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RampAndTableRoutingModule } from './ramp-and-table-routing.module';
import { RampAndTableComponent } from './ramp-and-table.component';

@NgModule({
  imports: [
    CommonModule,
    RampAndTableRoutingModule
  ],
  declarations: [RampAndTableComponent]
})
export class RampAndTableModule { }

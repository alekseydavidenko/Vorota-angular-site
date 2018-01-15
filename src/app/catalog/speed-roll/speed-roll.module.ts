import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeedRollRoutingModule } from './speed-roll-routing.module';
import { SpeedRollComponent } from './speed-roll.component';

@NgModule({
  imports: [
    CommonModule,
    SpeedRollRoutingModule
  ],
  declarations: [SpeedRollComponent]
})
export class SpeedRollModule { }

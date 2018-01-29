import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidingRoutingModule } from './sliding-routing.module';
import { Sliding500Component } from './sliding-500/sliding-500.component';
import { Sliding800Component } from './sliding-800/sliding-800.component';
import { Sliding1300proComponent } from './sliding-1300pro/sliding-1300pro.component';
import { Sliding2100proComponent } from './sliding-2100pro/sliding-2100pro.component';

@NgModule({
  imports: [
    CommonModule,
    SlidingRoutingModule
  ],
  declarations: [
    Sliding500Component,
    Sliding800Component,
    Sliding1300proComponent,
    Sliding2100proComponent]
})
export class SlidingModule { }

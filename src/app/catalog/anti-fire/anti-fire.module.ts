import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntiFireRoutingModule } from './anti-fire-routing.module';
import { AntiFireComponent } from './anti-fire.component';

@NgModule({
  imports: [
    CommonModule,
    AntiFireRoutingModule
  ],
  declarations: [AntiFireComponent]
})
export class AntiFireModule { }

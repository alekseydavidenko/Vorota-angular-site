import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolletRoutingModule } from './rollet-routing.module';
import { RolletComponent } from './rollet.component';

@NgModule({
  imports: [
    CommonModule,
    RolletRoutingModule
  ],
  declarations: [RolletComponent]
})
export class RolletModule { }

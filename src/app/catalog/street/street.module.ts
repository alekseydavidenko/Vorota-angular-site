import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreetRoutingModule } from './street-routing.module';
import { StreetComponent } from './street.component';

@NgModule({
  imports: [
    CommonModule,
    StreetRoutingModule
  ],
  declarations: [StreetComponent]
})
export class StreetModule { }

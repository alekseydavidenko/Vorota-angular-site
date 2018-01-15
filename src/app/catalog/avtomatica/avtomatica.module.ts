import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvtomaticaRoutingModule } from './avtomatica-routing.module';
import { AvtomaticaComponent } from './avtomatica.component';

@NgModule({
  imports: [
    CommonModule,
    AvtomaticaRoutingModule
  ],
  declarations: [AvtomaticaComponent]
})
export class AvtomaticaModule { }

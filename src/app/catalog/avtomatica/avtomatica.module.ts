import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvtomaticaRoutingModule } from './avtomatica-routing.module';
import { AvtomaticaComponent } from './avtomatica.component';

import { SectionsComponent } from './sections/sections.component';
import { AcsessuarsComponent } from './acsessuars/acsessuars.component';
import { SlidingComponent } from './sliding/sliding.component';
import { SwingComponent } from './swing/swing.component';

@NgModule({
  imports: [
    CommonModule,
    AvtomaticaRoutingModule
  ],
  declarations: [
    AvtomaticaComponent,
    SectionsComponent,
    AcsessuarsComponent,
    SlidingComponent,
    SwingComponent
  ]
})
export class AvtomaticaModule { }

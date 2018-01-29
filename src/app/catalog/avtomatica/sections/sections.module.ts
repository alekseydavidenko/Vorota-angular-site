import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { Se800proComponent } from './se-800pro/se-800pro.component';
import { Se1000proComponent } from './se-1000pro/se-1000pro.component';
import { Se1200Component } from './se-1200/se-1200.component';
import { Shaft20Component } from './shaft-20/shaft-20.component';
import { Shaft30Component } from './shaft-30/shaft-30.component';
import { Shaft50Component } from './shaft-50/shaft-50.component';
import { Shaft50proComponent } from './shaft-50pro/shaft-50pro.component';
import { Shaft60Component } from './shaft-60/shaft-60.component';
import { Shaft120Component } from './shaft-120/shaft-120.component';

@NgModule({
  imports: [
    CommonModule,
    SectionsRoutingModule
  ],
  declarations: [
    Se800proComponent,
    Se1000proComponent,
    Se1200Component,
    Shaft20Component,
    Shaft30Component,
    Shaft50Component,
    Shaft50proComponent,
    Shaft60Component,
    Shaft120Component
  ]
})
export class SectionsModule { }

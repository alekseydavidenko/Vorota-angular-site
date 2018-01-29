import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { StandartComponent } from './standart/standart.component';
import { StretchingComponent } from './stretching/stretching.component';
import { TorsionalComponent } from './torsional/torsional.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { PanoramaComponent } from './panorama/panorama.component';

@NgModule({
  imports: [
    CommonModule,
    SectionsRoutingModule
  ],
  declarations: [SectionsComponent, StandartComponent, StretchingComponent, TorsionalComponent, IndustrialComponent, PanoramaComponent]
})
export class SectionsModule { }

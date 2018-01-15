import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SectionsComponent } from './sections/sections.component';
import { StreetComponent } from './street/street.component';
import { AntiFireComponent } from './anti-fire/anti-fire.component';
import { AvtomaticaComponent } from './avtomatica/avtomatica.component';
import { BarrierComponent } from './barrier/barrier.component';
import { RolletComponent } from './rollet/rollet.component';
import { SpeedRollComponent } from './speed-roll/speed-roll.component';
import { TransshipmentComponent } from './transshipment/transshipment.component';
import { RampAndTableComponent } from './ramp-and-table/ramp-and-table.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    SectionsComponent,
    StreetComponent,
    AntiFireComponent,
    AvtomaticaComponent,
    BarrierComponent,
    RolletComponent,
    SpeedRollComponent,
    TransshipmentComponent,
    RampAndTableComponent
  ]
})
export class CatalogModule { }

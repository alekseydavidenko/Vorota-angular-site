import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogModule } from './catalog/catalog.module';

import { CatalogService } from './shared/catalog.service';
import { SectionsService } from './shared/sections/sections.service';
import { StreetService } from './shared/street/street.service';

import { SectionsModule } from './catalog/sections/sections.module';
import { AntiFireModule } from './catalog/anti-fire/anti-fire.module';
import { AvtomaticaModule } from './catalog/avtomatica/avtomatica.module';
import { BarrierModule } from './catalog/barrier/barrier.module';
import { RampAndTableModule } from './catalog/ramp-and-table/ramp-and-table.module';
import { RolletModule } from './catalog/rollet/rollet.module';
import { SpeedRollModule } from './catalog/speed-roll/speed-roll.module';
import { StreetModule } from './catalog/street/street.module';
import { TransshipmentModule } from './catalog/transshipment/transshipment.module';
import { SectionsModule as AvtomaticSectionModule } from './catalog/avtomatica/sections/sections.module';
import { SlidingModule  } from './catalog/avtomatica/sliding/sliding.module';
import { SwingModule } from './catalog/avtomatica/swing/swing.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    SectionsModule,
    AntiFireModule,
    AvtomaticaModule,
    BarrierModule,
    RampAndTableModule,
    RolletModule,
    SpeedRollModule,
    StreetModule,
    TransshipmentModule,
    AvtomaticSectionModule,
    SlidingModule,
    SwingModule
  ],
  providers: [
    CatalogService,
    SectionsService,
    StreetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

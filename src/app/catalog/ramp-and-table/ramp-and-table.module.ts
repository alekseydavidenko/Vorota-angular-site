import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RampAndTableRoutingModule } from './ramp-and-table-routing.module';
import { RampAndTableComponent } from './ramp-and-table.component';
import { WithSupportComponent } from './with-support/with-support.component';
import { WithoutSupportComponent } from './without-support/without-support.component';
import { WithThreeWayDownloadComponent } from './with-three-way-download/with-three-way-download.component';
import { ShortenedComponent } from './shortened/shortened.component';
import { OnePairScissorsComponent } from './one-pair-scissors/one-pair-scissors.component';
import { TwoPairScissorsComponent } from './two-pair-scissors/two-pair-scissors.component';
import { ThreePairScissorsComponent } from './three-pair-scissors/three-pair-scissors.component';
import { CompositeComponent } from './composite/composite.component';

@NgModule({
  imports: [
    CommonModule,
    RampAndTableRoutingModule
  ],
  declarations: [
    RampAndTableComponent,
    WithSupportComponent,
    WithoutSupportComponent,
    WithThreeWayDownloadComponent,
    ShortenedComponent,
    OnePairScissorsComponent,
    TwoPairScissorsComponent,
    ThreePairScissorsComponent,
    CompositeComponent]
})
export class RampAndTableModule { }

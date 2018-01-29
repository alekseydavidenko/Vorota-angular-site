import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreetRoutingModule } from './street-routing.module';
import { StreetComponent } from './street.component';
import { RecoilingComponent } from './recoiling/recoiling.component';
import { SwingingComponent } from './swinging/swinging.component';
import { WicketsComponent } from './wickets/wickets.component';

@NgModule({
  imports: [
    CommonModule,
    StreetRoutingModule
  ],
  declarations: [StreetComponent, RecoilingComponent, SwingingComponent, WicketsComponent]
})
export class StreetModule { }

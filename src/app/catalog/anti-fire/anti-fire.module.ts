import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntiFireRoutingModule } from './anti-fire-routing.module';
import { AntiFireComponent } from './anti-fire.component';
import { SectionComponent } from './section/section.component';
import { RecoilingComponent } from './recoiling/recoiling.component';
import { SwingingComponent } from './swinging/swinging.component';

@NgModule({
  imports: [
    CommonModule,
    AntiFireRoutingModule
  ],
  declarations: [AntiFireComponent, SectionComponent, RecoilingComponent, SwingingComponent]
})
export class AntiFireModule { }

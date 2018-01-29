import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwingRoutingModule } from './swing-routing.module';
import { Swing2500Component } from './swing-2500/swing-2500.component';
import { Swing3000proComponent } from './swing-3000pro/swing-3000pro.component';
import { Swing5000proComponent } from './swing-5000pro/swing-5000pro.component';
import { Arm230Component } from './arm-230/arm-230.component';
import { Arm320proComponent } from './arm-320pro/arm-320pro.component';

@NgModule({
  imports: [
    CommonModule,
    SwingRoutingModule
  ],
  declarations: [
    Swing2500Component,
    Swing3000proComponent,
    Swing5000proComponent,
    Arm230Component,
    Arm320proComponent]
})
export class SwingModule { }

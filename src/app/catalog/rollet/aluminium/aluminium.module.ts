import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AluminiumRoutingModule } from './aluminium-routing.module';

import { Rh45Component } from './rh-45/rh-45.component';
import { Rh58Component } from './rh-58/rh-58.component';
import { Rh77Component } from './rh-77/rh-77.component';
import { Rhe45Component } from './rhe-45/rhe-45.component';
import { Rhe58Component } from './rhe-58/rhe-58.component';
import { Rhe56Component } from './rhe-56/rhe-56.component';
import { Rhe84Component } from './rhe-84/rhe-84.component';

@NgModule({
  imports: [
    CommonModule,
    AluminiumRoutingModule
  ],
  declarations: [
    Rh45Component,
    Rh58Component,
    Rh77Component,
    Rhe45Component,
    Rhe58Component,
    Rhe56Component,
    Rhe84Component]
})
export class AluminiumModule { }

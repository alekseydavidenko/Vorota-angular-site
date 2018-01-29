import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeedRollRoutingModule } from './speed-roll-routing.module';
import { SpeedRollComponent } from './speed-roll.component';
import { InsideComponent } from './inside/inside.component';
import { OutsideComponent } from './outside/outside.component';
import { FoodComponent } from './food/food.component';
import { ColdComponent } from './cold/cold.component';
import { CleanComponent } from './clean/clean.component';
import { FilmVeilsComponent } from './film-veils/film-veils.component';
import { FilmSwingingComponent } from './film-swinging/film-swinging.component';

@NgModule({
  imports: [
    CommonModule,
    SpeedRollRoutingModule
  ],
  declarations: [SpeedRollComponent, InsideComponent, OutsideComponent, FoodComponent, ColdComponent, CleanComponent, FilmVeilsComponent, FilmSwingingComponent]
})
export class SpeedRollModule { }

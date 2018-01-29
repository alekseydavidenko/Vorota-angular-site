import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsideComponent } from './inside/inside.component';
import { OutsideComponent } from './outside/outside.component';
import { FoodComponent } from './food/food.component';
import { ColdComponent } from './cold/cold.component';
import { CleanComponent } from './clean/clean.component';
import { FilmVeilsComponent } from './film-veils/film-veils.component';
import { FilmSwingingComponent } from './film-swinging/film-swinging.component';

const routes: Routes = [
  { path: 'catalog/speed-roll/inside', component: InsideComponent },
  { path: 'catalog/speed-roll/outside', component: OutsideComponent },
  { path: 'catalog/speed-roll/food', component: FoodComponent },
  { path: 'catalog/speed-roll/cold', component: ColdComponent },
  { path: 'catalog/speed-roll/clean', component: CleanComponent },
  { path: 'catalog/speed-roll/film-veils', component: FilmVeilsComponent },
  { path: 'catalog/speed-roll/film-swinging', component: FilmSwingingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeedRollRoutingModule { }

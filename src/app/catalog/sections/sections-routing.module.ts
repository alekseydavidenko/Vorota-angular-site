import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections.component';
import { StandartComponent } from './standart/standart.component';
import { StretchingComponent } from './stretching/stretching.component';
import { TorsionalComponent } from './torsional/torsional.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { PanoramaComponent } from './panorama/panorama.component';

const routes: Routes = [
  { path: 'catalog/section/standart', component: StandartComponent },
  { path: 'catalog/section/stretching', component: StretchingComponent },
  { path: 'catalog/section/torsional', component: TorsionalComponent },
  { path: 'catalog/section/industrial', component: IndustrialComponent },
  { path: 'catalog/section/panorama', component: PanoramaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }

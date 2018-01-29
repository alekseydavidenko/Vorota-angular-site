import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionsComponent } from './sections/sections.component';
import { SlidingComponent } from './sliding/sliding.component';
import { SwingComponent } from './swing/swing.component';
import { AcsessuarsComponent } from './acsessuars/acsessuars.component';

const routes: Routes = [
  { path: 'catalog/avtomatica/sections', component: SectionsComponent },
  { path: 'catalog/avtomatica/sliding', component: SlidingComponent },
  { path: 'catalog/avtomatica/swing', component: SwingComponent },
  { path: 'catalog/avtomatica/acsessuars', component: AcsessuarsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvtomaticaRoutingModule { }

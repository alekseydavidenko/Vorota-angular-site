import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Se800proComponent } from './se-800pro/se-800pro.component';
import { Se1000proComponent } from './se-1000pro/se-1000pro.component';
import { Se1200Component } from './se-1200/se-1200.component';
import { Shaft20Component } from './shaft-20/shaft-20.component';
import { Shaft30Component } from './shaft-30/shaft-30.component';
import { Shaft50Component } from './shaft-50/shaft-50.component';
import { Shaft50proComponent } from './shaft-50pro/shaft-50pro.component';
import { Shaft60Component } from './shaft-60/shaft-60.component';
import { Shaft120Component } from './shaft-120/shaft-120.component';

const routes: Routes = [
  { path: 'catalog/avtomatica/sections/se-800pro', component: Se800proComponent },
  { path: 'catalog/avtomatica/sections/se-1000pro', component: Se1000proComponent },
  { path: 'catalog/avtomatica/sections/se-1200', component: Se1200Component },
  { path: 'catalog/avtomatica/sections/shaft-20', component: Shaft20Component },
  { path: 'catalog/avtomatica/sections/shaft-30', component: Shaft30Component },
  { path: 'catalog/avtomatica/sections/shaft-50', component: Shaft50Component },
  { path: 'catalog/avtomatica/sections/shaft-50pro', component: Shaft50proComponent },
  { path: 'catalog/avtomatica/sections/shaft-60', component: Shaft60Component },
  { path: 'catalog/avtomatica/sections/shaft-120', component: Shaft120Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }

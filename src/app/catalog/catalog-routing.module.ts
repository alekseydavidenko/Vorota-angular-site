import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { SectionsComponent } from './sections/sections.component';
import { StreetComponent } from './street/street.component';
import { AntiFireComponent } from './anti-fire/anti-fire.component';
import { AvtomaticaComponent } from './avtomatica/avtomatica.component';
import { BarrierComponent } from './barrier/barrier.component';
import { RolletComponent } from './rollet/rollet.component';
import { SpeedRollComponent } from './speed-roll/speed-roll.component';
import { TransshipmentComponent } from './transshipment/transshipment.component';
import { RampAndTableComponent } from './ramp-and-table/ramp-and-table.component';


const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/section', component: SectionsComponent },
  { path: 'catalog/street', component: StreetComponent },
  { path: 'catalog/anti-fire', component: AntiFireComponent },
  { path: 'catalog/avtomatica', component: AvtomaticaComponent},
  { path: 'catalog/barrier', component: BarrierComponent},
  { path: 'catalog/rollet', component: RolletComponent},
  { path: 'catalog/speed-roll', component: SpeedRollComponent},
  { path: 'catalog/transshipment', component: TransshipmentComponent},
  { path: 'catalog/ramp-and-table', component: RampAndTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }

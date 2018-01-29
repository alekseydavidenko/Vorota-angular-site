import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoilingComponent } from './recoiling/recoiling.component';
import { SwingingComponent } from './swinging/swinging.component';
import { WicketsComponent } from './wickets/wickets.component';

const routes: Routes = [
  { path: 'catalog/street/recoiling', component: RecoilingComponent },
  { path: 'catalog/street/swinging', component: SwingingComponent },
  { path: 'catalog/street/wickets', component: WicketsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreetRoutingModule { }

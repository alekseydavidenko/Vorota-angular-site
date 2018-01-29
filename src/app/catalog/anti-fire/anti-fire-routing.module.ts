import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionComponent } from './section/section.component';
import { RecoilingComponent } from './recoiling/recoiling.component';
import { SwingingComponent } from './swinging/swinging.component';

const routes: Routes = [
  { path: 'catalog/anti-fire/section', component: SectionComponent },
  { path: 'catalog/anti-fire/recoiling', component: RecoilingComponent },
  { path: 'catalog/anti-fire/swinging', component: SwingingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntiFireRoutingModule { }

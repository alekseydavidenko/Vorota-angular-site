import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithSupportComponent } from './with-support/with-support.component';
import { WithoutSupportComponent } from './without-support/without-support.component';
import { WithThreeWayDownloadComponent } from './with-three-way-download/with-three-way-download.component';
import { ShortenedComponent } from './shortened/shortened.component';
import { OnePairScissorsComponent } from './one-pair-scissors/one-pair-scissors.component';
import { TwoPairScissorsComponent } from './two-pair-scissors/two-pair-scissors.component';
import { ThreePairScissorsComponent } from './three-pair-scissors/three-pair-scissors.component';
import { CompositeComponent } from './composite/composite.component';

const routes: Routes = [
  { path: 'catalog/ramp-and-table/with-support', component: WithSupportComponent },
  { path: 'catalog/ramp-and-table/without-support', component: WithoutSupportComponent },
  { path: 'catalog/ramp-and-table/with-three-way-download', component: WithThreeWayDownloadComponent },
  { path: 'catalog/ramp-and-table/shortened', component: ShortenedComponent },
  { path: 'catalog/ramp-and-table/one-pair-scissors', component: OnePairScissorsComponent },
  { path: 'catalog/ramp-and-table/two-pair-scissors', component: TwoPairScissorsComponent },
  { path: 'catalog/ramp-and-table/three-pair-scissors', component: ThreePairScissorsComponent },
  { path: 'catalog/ramp-and-table/composite', component: CompositeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RampAndTableRoutingModule { }

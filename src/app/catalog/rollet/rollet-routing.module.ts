import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AluminiumComponent } from './aluminium/aluminium.component';
import { SteelComponent } from './steel/steel.component';
import { SteelShaftComponent } from './steel-shaft/steel-shaft.component';

const routes: Routes = [
  { path: 'catalog/rollet/aluminium', component: AluminiumComponent },
  { path: 'catalog/rollet/steel', component: SteelComponent },
  { path: 'catalog/rollet/steel-shaft', component: SteelShaftComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolletRoutingModule { }

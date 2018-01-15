import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'catalog/section'},
  // { path: 'catalog/section', component: SectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Swing2500Component } from './swing-2500/swing-2500.component';
import { Swing3000proComponent } from './swing-3000pro/swing-3000pro.component';
import { Swing5000proComponent } from './swing-5000pro/swing-5000pro.component';
import { Arm230Component } from './arm-230/arm-230.component';
import { Arm320proComponent } from './arm-320pro/arm-320pro.component';

const routes: Routes = [
  { path: 'catalog/avtomatica/swing/swing-2500', component: Swing2500Component },
  { path: 'catalog/avtomatica/swing/swing-3000pro', component: Swing3000proComponent },
  { path: 'catalog/avtomatica/swing/swing-5000pro', component: Swing5000proComponent },
  { path: 'catalog/avtomatica/swing/arm-230', component: Arm230Component },
  { path: 'catalog/avtomatica/swing/arm-320pro', component: Arm320proComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwingRoutingModule { }

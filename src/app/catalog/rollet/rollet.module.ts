import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolletRoutingModule } from './rollet-routing.module';
import { RolletComponent } from './rollet.component';

import { AluminiumComponent } from './aluminium/aluminium.component';
import { SteelComponent } from './steel/steel.component';
import { SteelShaftComponent } from './steel-shaft/steel-shaft.component';

@NgModule({
  imports: [
    CommonModule,
    RolletRoutingModule
  ],
  declarations: [
    RolletComponent,
    AluminiumComponent,
    SteelComponent,
    SteelShaftComponent]
})
export class RolletModule { }

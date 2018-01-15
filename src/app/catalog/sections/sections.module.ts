import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';

@NgModule({
  imports: [
    CommonModule,
    SectionsRoutingModule
  ],
  declarations: [SectionsComponent]
})
export class SectionsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogModule } from './catalog/catalog.module';

import { CatalogServise } from './shared/catalog.servise';
import { SectionsModule } from './catalog/sections/sections.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    SectionsModule
  ],
  providers: [CatalogServise],
  bootstrap: [AppComponent]
})
export class AppModule { }

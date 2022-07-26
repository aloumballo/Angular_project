import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './client/catalogue/catalogue.component';
import { ContenucartComponent } from './contenucart/contenucart.component';
import { RouterModule } from '@angular/router';
import { CompoComponent } from './compo/compo.component';
import { CartComponent } from './client/cart/cart.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    
    
    ContenucartComponent,
    CompoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

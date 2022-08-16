import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './client/pages/catalogue/catalogue.component';
import { ContenucartComponent } from './client/contenucart/contenucart.component';
import { RouterModule } from '@angular/router';
//import { Route,RouterModule,Routes } from '@angular/router';

import { CompoComponent } from './compo/compo.component';
import { CartComponent } from './client/cart/cart.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContenucartComponent,
    CompoComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

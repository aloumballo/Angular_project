import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PanierComponent } from './panier/panier.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { DetailsMenuComponent } from './details-menu/details-menu.component';
import { DetailsBurgerComponent } from './details-burger/details-burger.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BurgerSimpleComponent } from './burger-simple/burger-simple.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';




@NgModule({
  declarations: [
    PanierComponent,
    MenuBurgerComponent,
    DetailsMenuComponent,
    CartComponent,
    DetailsBurgerComponent,
    CatalogueComponent,
    BurgerSimpleComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  
  ],
  
})
export class ClientModule { }

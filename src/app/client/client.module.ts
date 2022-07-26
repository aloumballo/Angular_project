import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { BurgerSimpleComponent } from './burger-simple/burger-simple.component';
import { DetailsBurgerComponent } from './details-burger/details-burger.component';
import { DetailsMenuComponent } from './details-menu/details-menu.component';
import { PanierComponent } from './panier/panier.component';




@NgModule({
  declarations: [
    CatalogueComponent,
    MenuBurgerComponent,
    BurgerSimpleComponent,
    DetailsBurgerComponent,
    DetailsMenuComponent,
    PanierComponent,
  ],
  imports: [
    CommonModule,
  
  ]
})
export class ClientModule { }

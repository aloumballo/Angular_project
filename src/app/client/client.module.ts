import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PanierComponent } from './panier/panier.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { DetailsMenuComponent } from './details-menu/details-menu.component';
import { DetailsBurgerComponent } from './details-burger/details-burger.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { BurgerSimpleComponent } from './burger-simple/burger-simple.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CatalogueMenuComponent } from './pages/catalogue-menu/catalogue-menu.component';
import { CatalogueBurgerComponent } from './pages/catalogue-burger/catalogue-burger.component';
import { ListeCatalogueComponent } from './components/liste-catalogue/liste-catalogue.component';
import { LayoutModule } from './layout/layout.module';




@NgModule({
  declarations: [
    PanierComponent,
    MenuBurgerComponent,
    DetailsMenuComponent,
    CartComponent,
    DetailsBurgerComponent,
    CatalogueComponent,
    BurgerSimpleComponent,
    CatalogueMenuComponent,
    CatalogueBurgerComponent,
    ListeCatalogueComponent,
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule
  
  ],
  
})
export class ClientModule { }

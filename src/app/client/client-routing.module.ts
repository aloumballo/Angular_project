import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBurgerComponent } from './details-burger/details-burger.component';
import { CatalogueBurgerComponent } from './pages/catalogue-burger/catalogue-burger.component';
import { CatalogueMenuComponent } from './catalogue-menu/catalogue-menu.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
//import { DetailsMenuComponent } from './details-menu/details-menu.component';
import { DetailsMenuComponent } from './details-menu/details-menu.component';
import { PanierComponent } from './panier/panier.component';
import { ContenucartComponent } from './contenucart/contenucart.component';
import { ListeCComponent } from './liste-c/liste-c.component';





const routes: Routes = [
  { path: '', component: CatalogueComponent },
   //{ path: 'detmenu', component:DetailsMenuComponent },
  { path: 'detmenu', component:DetailsMenuComponent },
  { path: 'liste', component:ListeCComponent},

  { path: 'panier', component: PanierComponent },
  { path: 'menu', component: CatalogueMenuComponent },
  { path: 'burger', component: CatalogueBurgerComponent },
  { path: 'details/:id', component: DetailsBurgerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

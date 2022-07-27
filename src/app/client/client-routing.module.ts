import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBurgerComponent } from './details-burger/details-burger.component';
import { CatalogueBurgerComponent } from './pages/catalogue-burger/catalogue-burger.component';
import { CatalogueMenuComponent } from './pages/catalogue-menu/catalogue-menu.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'menu', component: CatalogueMenuComponent },
  { path: 'burger', component: CatalogueBurgerComponent },
    { path: 'details/:id', component: DetailsBurgerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

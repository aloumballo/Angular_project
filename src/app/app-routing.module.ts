import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './client/catalogue/catalogue.component';
import { DetailsBurgerComponent } from './client/details-burger/details-burger.component';
import { DetailsMenuComponent } from './client/details-menu/details-menu.component';

const routes: Routes = [
     

  { path: 'detail', component: DetailsBurgerComponent },
     { path: 'det', component:  DetailsMenuComponent },
     
     { path: '', component: CatalogueComponent },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

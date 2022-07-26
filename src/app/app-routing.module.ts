import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBurgerComponent } from './client/details-burger/details-burger.component';
import { DetailsMenuComponent } from './client/details-menu/details-menu.component';
import { CompoComponent } from './compo/compo.component';

const routes: Routes = [
     

  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
   { path: '', redirectTo: 'client',pathMatch:"full"},
  { path: 'details', component: DetailsBurgerComponent },
   { path: 'detmenu', component:DetailsMenuComponent },
   { path: "**",component: CompoComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

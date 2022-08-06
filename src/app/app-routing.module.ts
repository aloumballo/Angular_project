import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoComponent } from './compo/compo.component';

const routes: Routes = [
     

   { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'client', pathMatch: "full" },
   
   { path: "**",component: CompoComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

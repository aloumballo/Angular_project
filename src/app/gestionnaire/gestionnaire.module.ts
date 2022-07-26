import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeListeComponent } from './commande-liste/commande-liste.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';



@NgModule({
  declarations: [
    CommandeListeComponent,
    CommandeDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GestionnaireModule { }

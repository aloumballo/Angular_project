import { Component, OnInit } from '@angular/core';
import { CommandeBurger, CommandeMenu, CommandePortionFrite, CommandeTailleBoisson } from 'src/app/shared/models/commande';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  alouu: any;
  panier: Produit[] = []
  

  constructor(private lu: PanierService) { 
    window.localStorage.removeItem('produit')
    
  }
  items$ = this.lu.items$
   

  ngOnInit(): void {
    this.alouu = this.lu.items$   
    
   
    
  }

  triepanier(tabpanier: Produit[]) {
    let baseMenu: CommandeMenu[] = []
    let basePortion: CommandePortionFrite[]
    let baseBurger: CommandeBurger[]
    let baseTaille: CommandeTailleBoisson[]
    tabpanier.forEach(produit => {
      console.log(produit);
    }
    )
    
  }

}

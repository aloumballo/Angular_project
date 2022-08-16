import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueService } from 'src/app/shared/service/catalogue.service';
import { DetailsService } from 'src/app/shared/service/details.service';
import { PanierService } from 'src/app/shared/service/panier.service';

@Component({
  selector: 'app-details-burger',
  templateUrl: './details-burger.component.html',
  styleUrls: ['./details-burger.component.scss']
})

export class DetailsBurgerComponent implements OnInit {
  @Input() produit: Produit | null = null
  detailProduit: any
  ok = false;
  frites: any
  tailles: any
  type: string = ''
  

  constructor(private route: Router, private mba: CatalogueService, private roo: DetailsService, private activeRoute: ActivatedRoute,private lu: PanierService) { }

  ngOnInit(): void {
    const id = +Number(this.activeRoute.snapshot.paramMap.get('id'))
    // this.mba.getProduit(id).subscribe(
    //   prod=> this.detailProduit = prod
    // )  

    this.roo.getDatails(id).subscribe(
      data => {
        let type = this.activeRoute.snapshot.queryParamMap.get('type');
        switch (type) {
          case "menu":
            this.detailProduit = data.menu
            break;
          case "burger":
            this.detailProduit = data.burger
            break;

          default:
            break;
        }
        this.frites = data.portions
        this.tailles = data.tailles
       // this.detailProduit = data.menu

        console.log(this.detailProduit);
        console.log(this.detailProduit.menuBurgers[0].burger.nom);
        //console.log(this.detailProduit.menuBurgers[0].burger.nom);


      }
    )
  }
  addToCart() {
    this.lu.addToCart(this.detailProduit)
    alert('ok');
    
  }

}

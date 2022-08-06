import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueService } from 'src/app/shared/service/catalogue.service';
import { DetailsService } from 'src/app/shared/service/details.service';

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
  taille:any

  constructor(private route:Router,private mba:CatalogueService,private roo:DetailsService ,private activeRoute:ActivatedRoute) { }

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
        // this.detailProduit = data.menu

         console.log(data.portions);
        
        
      }
    )
      
  
  }
  
}

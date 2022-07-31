import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueService } from 'src/app/shared/service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
  
export class CatalogueComponent implements OnInit {
  catalogue$: Observable<Catalogue> | null = null
  catalogue: Catalogue | null = null
  produits: any[] | undefined = []
  value:any
  constructor(private catalogueService: CatalogueService, private route: Router) { }
  param = this.route.parseUrl(this.route.url).queryParams['type'];
  

  ngOnInit(): void {
    // console.log(this.param);
    this.catalogueService.getCatalogue().subscribe((data) => {
      this.catalogue = data;
      this.produits=this.catalogue?.produit
    })
    // this.produits = this.catalogue?.produit
    alert(this.produits)
  }

  changeCatalogue(value:string) {
      switch (value) {
      case "burger":
          this.produits=this.catalogue?.burger
          break;
      case "menu":
          this.produits = this.catalogue?.produit
        break;
          this.produits = this.catalogue?.produit
        break;
    }  
  }

}

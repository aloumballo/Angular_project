import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueService } from 'src/app/shared/service/catalogue.service';

@Component({
  selector: 'app-details-burger',
  templateUrl: './details-burger.component.html',
  styleUrls: ['./details-burger.component.scss']
})
  
export class DetailsBurgerComponent implements OnInit {
  @Input() produit: Produit | null = null
  detailProduit:any

  constructor(private route:Router,private mba:CatalogueService ,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +Number(this.activeRoute.snapshot.paramMap.get('id'))
    this.mba.getProduit(id).subscribe(
      prod=> this.detailProduit = prod
    )
    
   
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-liste-catalogue',
  templateUrl: './liste-catalogue.component.html',
  styleUrls: ['./liste-catalogue.component.scss']
})
export class ListeCatalogueComponent implements OnInit {
  @Input('prod')  produits:Produit[]|undefined=[]
  constructor() { }

  ngOnInit(): void {
  }

}

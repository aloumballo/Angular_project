import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/service/panier.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() produit: Produit | null = null
  @Input() type:String="catalogue"
  constructor(private alou: PanierService) { }


  ngOnInit(): void {
  }
  addToCart(prod: any) {
    this.alou.addToCart(prod)
  }

}

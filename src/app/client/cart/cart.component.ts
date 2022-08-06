import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() produit: Produit | null = null
  @Input() type:String="catalogue"
  constructor() { }

  ngOnInit(): void {
  }

}

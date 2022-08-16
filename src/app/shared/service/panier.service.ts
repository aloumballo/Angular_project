import { Injectable } from '@angular/core';
import { BehaviorSubject, map,Observable,take } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  
constructor() {
  // const userson = localStorage.getItem('currentUser');
// this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();


    let existingCartItems = JSON.parse(localStorage.getItem('produit') || '[]');

    // console.log(localStorage.getItem('produit'));

    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$: Observable<any> = this.itemsSubject.asObservable();

  addToCart(product: any) {
    this.items$.
      pipe(
        take(1),
        map((products) => {
          // console.log(product);
          // products.push(product)
          if (!this.isExistProduit(products, product.id)) {
            // console.log(product);
            product.quantite=1
            products.push(product);
          }
          else{
            // product.quantite+=1
            products.forEach((element:any) => {

                element.quantite +=1
        
            });
          }
          console.log(products)
          localStorage.setItem('produit', JSON.stringify(products));
        })
      )
      .subscribe();
  }

  isExistProduit(tableau: any, idprod: number) {
    return tableau.find((pro: any) => {
      // console.log(pro.id);

      return pro.id === idprod;
    });
  }

}

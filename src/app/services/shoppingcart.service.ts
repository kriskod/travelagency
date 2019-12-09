import { Injectable } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor() { }

  private cartProducts: tourStructure[] = []
  cartLength$ = new Subject<number>();

  //Lista produktów do koszyka
  getCartProducts(): tourStructure[] {
    return this.cartProducts;
  }
  //Pobierz produkt z koszyka
  getCartProduct(id: number): tourStructure {
    return this.cartProducts[id];
  }
  //Dodaj produkt do koszyka
  addCartProduct(product: tourStructure) {
    let cartProduct = this.cartProducts.find(prod => prod.id == product.id)
    if (cartProduct)
      cartProduct.quantity += 1;
    else {
      product.quantity = 1;
      this.cartProducts.push(product);
      this.cartLength$.next(this.cartProducts.length)
    }
  }
  //Usuń produkt z koszyka
  removeProductFromCart(product: tourStructure) {
    console.log(product)
    let index = this.cartProducts.indexOf(product)
    if (index > -1) {
      this.cartProducts.splice(index, 1)
    }
    console.log(this.cartProducts)
    this.cartLength$.next(this.cartProducts.length)
  }

  //Całkowita cena 
  getTotalPrice() {
    let total = 0
    this.cartProducts.map(item => {
      total += item.price
    })
    return total
  }
}

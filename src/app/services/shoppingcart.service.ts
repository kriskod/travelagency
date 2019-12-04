import { Injectable } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor() { }

  private cartProducts: tourStructure[] = []

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
    console.log(cartProduct)
    if (cartProduct)
      cartProduct.quantity += 1;
    else {
      product.quantity = 1;
      this.cartProducts.push(product);
    }
  }
  //Usuń produkt z koszyka
  removeProductFromCart(product: tourStructure) {
    let index = this.cartProducts.indexOf(product)
    if (index > -1) {
      this.cartProducts.splice(index, 1)
    }
  }
  //Opróżnij koszyk
  emptyCart() {
    this.cartProducts.length = 0;
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

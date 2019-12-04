import { Injectable } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor() { }

  private cartProducts: tourStructure[] = []
  public products = new Subject()

  getCartProducts(): tourStructure[] {
    return this.cartProducts;
  }

  getCartProduct(id: number): tourStructure {
    return this.cartProducts[id];
  }

  addCartProduct(product: tourStructure) {
      this.cartProducts.push(product);
  }

  deleteFromCart(product: tourStructure) {
    let index = this.cartProducts.indexOf(product)
    if (index > -1) {
      this.cartProducts.splice(index, 1)
    }
  }
  //Obecnie używana
  removeProductFromCart(productId) {
    this.cartProducts.map((item, index) => {
      if (item.id === productId) {
        this.cartProducts.splice(index, 1);
      }
    });

    this.products.next(this.cartProducts);
  }

  emptyCart() {
    this.cartProducts.length = 0;
  }

  getTotalPrice(){
    let total = 0
    this.cartProducts.map(item => {
      total +=item.price
    })
    return total
  }
}

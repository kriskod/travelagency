import { Component, OnInit } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  private products: tourStructure[] = []

  constructor( private ShoppingCartService: ShoppingcartService) {}

  private totalAmmount;

  //Wyświetlanie produktów w koszyku
  ngOnInit() {
    this.products = this.ShoppingCartService.getCartProducts()
    console.log(this.products)
  }

  //Dodawanie do koszyka
  addToCart(product: tourStructure){
    window.alert('Dodano do koszyka')
    this.ShoppingCartService.addCartProduct(product)
  }

  // //Usuwanie produktu z  koszyka
  // removeFromCart(productId){
  //   window.alert('Wyczyszczono koszyk')
  //   this.ShoppingCartService.removeProductFromCart(productId)
  // }

  removeFromCart(product: tourStructure){
    window.alert('Wyczyszczono koszyk')
    this.ShoppingCartService.removeProductFromCart(product)
  }

  //Czyszczenie koszyka
  cleanCart(){
    this.ShoppingCartService.emptyCart()
  }

  //Całkowita cena zamówienia 
  totalPrice(){
    this.totalAmmount = this.ShoppingCartService.getTotalPrice()
  }

}

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

  //Wyświetlanie produktów w koszyku
  ngOnInit() {
    this.products = this.ShoppingCartService.getCartProducts()
    console.log(this.products)
  }

  // //Usuwanie produktu z  koszyka
  removeFromCart(product: tourStructure){
    window.alert('Usunięto z koszyka')
    this.ShoppingCartService.removeProductFromCart(product)
  }

  //Całkowita cena zamówienia 
  totalPrice(){

  }

}

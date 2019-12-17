import { Component, OnInit } from '@angular/core';
import { tourData } from '../tour/tourData.model';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { tourStructure } from '../models/tourStructure.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  private products: tourStructure[] = [];
  private boughtProducts: tourStructure[] = [];

  constructor(private ShoppingCartService: ShoppingcartService) { }

  ngOnInit() {
    this.products = this.ShoppingCartService.getCartProducts()
    console.log(this.products)
  }

  totalPrice() {
    if (this.products.length > 0)
      return this.products.map(product => product.price * product.quantity).reduce((acc, val) => acc + val);
  }

}

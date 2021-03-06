import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { UserStructure } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { FireDbToursService } from '../services/fire-db-tours.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() tour: tourStructure
  @Output() removeTour = new EventEmitter<tourStructure>()

  stars: number[] = [1,2,3,4,5];
  selectedValue: number;
  user: UserStructure;

  constructor(private ShoppingCartService: ShoppingcartService, private tourService : FireDbToursService) { }

  ngOnInit() {
    
  }

  onProductRemoved() {
    this.removeTour.emit(this.tour)
  }

  onTourBooked(){
    if(this.tour.leftSeats > 0)
      this.tour.leftSeats -= 1
  }

  onTourCancelled(){
    if(this.tour.leftSeats < this.tour.maxSeats)
    this.tour.leftSeats += 1
  }
  

  onCartAdded(){
    console.log("Dodano do koszyka")
    this.ShoppingCartService.addCartProduct(this.tour)
  }

  countStar(star) {
    this.selectedValue = star;
    this.tour.rate = this.selectedValue;
    console.log('Ocena: ', star);
  }
}

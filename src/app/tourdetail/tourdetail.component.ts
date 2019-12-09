import { Component, OnInit, Input } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { TourService } from '../services/tour.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})
export class TourdetailComponent implements OnInit {

  private tour: tourStructure

  constructor(private route: ActivatedRoute, private tourService: TourService, private ShoppingCartService: ShoppingcartService) { }

  getCartProduct(id: number) {
    this.tourService.getProduct(id)
  }

  onTourBooked() {
    if (this.tour.leftSeats > 0)
      this.tour.leftSeats -= 1
  }

  onTourCancelled() {
    if (this.tour.leftSeats < this.tour.maxSeats)
      this.tour.leftSeats += 1
  }

  onCartAdded() {
    console.log("Dodano do koszyka")
    this.ShoppingCartService.addCartProduct(this.tour)
  }

  onRate($event: { oldRate: number, newRate: number }) {
    this.tour.rate = $event.newRate;
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params)
        if (params["id"])
          this.tour = this.tourService.getProduct(+params["id"]);
        console.log(this.tour)
      },
      err => console.log(err)
    )
  }

}

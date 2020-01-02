import { Component, OnInit } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { TourService } from '../services/tour.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { CurrencyPipe } from '../pipes/currency.pipe';
import { NgxSpinnerService } from "ngx-spinner";
import { FireDbToursService } from '../services/fire-db-tours.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})

export class TourdetailComponent implements OnInit {

  private tour: tourStructure

  constructor(private route: ActivatedRoute, private firedb: FireDbToursService, private ShoppingCartService: ShoppingcartService, private spinnerService: NgxSpinnerService) { }

  getCartProduct(id: string) {
    this.spinnerService.show()
    this.firedb.getTour(id).subscribe(
      tour => {
        this.tour = tour
        this.spinnerService.hide()
      }
    )
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
      params => this.getCartProduct(params["id"])
    )
  }

}

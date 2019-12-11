import { Component, OnInit } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { TourService } from '../services/tour.service';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent implements OnInit {

  tours: tourStructure[] = [];

  constructor(private tourService: TourService, private curencyService: CurrencyService) { }

  getTours() {
    //this.tours = this.tourService.getProducts()
    this.tourService.getProducts().subscribe(
      products => {
        this.tours = products
      },
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.getTours()
  }

  removeProduct(product: tourStructure) {
    //this.tourService.deleteProduct(product)
    this.tourService.deleteProduct(product).subscribe(
      response => {
        this.getTours()
      },
      err => console.log(err)
    )
  }

}

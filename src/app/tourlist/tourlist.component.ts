import { Component, OnInit } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { TourService } from '../services/tour.service';
import { CurrencyService } from '../services/currency.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FireDbToursService } from '../services/fire-db-tours.service';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent implements OnInit {

  tours: tourStructure[] = [];
  searchTerm: string = "";

  constructor(private firedb: FireDbToursService, private tourService: TourService, private curencyService: CurrencyService, private spinnerService: NgxSpinnerService, private fdb: FireDbToursService) { }

  getTours() {
    //this.tours = this.tourService.getProducts()
    this.spinnerService.show()
    this.tourService.getProducts().subscribe(
      products => {
        // console.log(JSON.stringify(products))
        this.tours = products
        this.spinnerService.hide()
      },
      err => console.log(err)
    )
    this.fireGetTours()

  }

  fireGetTours() {
    this.spinnerService.show()
    this.fdb.getTours().subscribe(
      (tours: tourStructure[]) => {
        this.tours = tours
        console.log(this.tours)
        this.spinnerService.hide()
      },
      err => console.log
    )
  }


  ngOnInit() {
    this.fireGetTours()
  }

  removeProduct(product: tourStructure) {
    //this.tourService.deleteProduct(product)
    this.firedb.removeProduct(product)
    // this.tourService.deleteProduct(product).subscribe(
    //   response => {
    //     this.getTours()
    //   },
    //   err => console.log(err)
    // )
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm

  }

}

import { Component, OnInit } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { TourService } from '../services/tour.service';
import { CurrencyService } from '../services/currency.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent implements OnInit {

  tours: tourStructure[] = [];
  searchTerm: string = "";

  constructor(private tourService: TourService, private curencyService: CurrencyService, private spinnerService: NgxSpinnerService ) { }

  getTours() {
    //this.tours = this.tourService.getProducts()
    this.spinnerService.show()
    this.tourService.getProducts().subscribe(
      products => {
        this.tours = products
        this.spinnerService.hide()
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

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm

  }

}

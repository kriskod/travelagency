import { Component, OnInit } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { tourData } from '../tour/tourData.model';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent implements OnInit {

  tours: tourStructure[] = [];

  constructor(private tourService: TourService) { }

  getTours() {
    this.tours = this.tourService.getProducts()
  }

  ngOnInit() {
    this.getTours()
  }

  removeProduct(product: tourStructure) {
    this.tourService.deleteProduct(product)
  }
}

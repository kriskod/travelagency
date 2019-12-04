import { Component, OnInit, Output } from '@angular/core';
import { TourService } from '../services/tour.service';
import { tourStructure } from '../models/tourStructure.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tours: tourStructure[] = [];
  
  constructor(private tourService: TourService) { }

  onTourAdded(product: tourStructure){
    this.tourService.addProduct(product)
  }

  onDialogOpened(){}

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { TourService } from '../services/tour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})
export class TourdetailComponent implements OnInit {

  tour: tourStructure

  constructor(private route: ActivatedRoute, private tourService: TourService) { }

  getCartProduct(id: number){
    this.tourService.getProduct(id)
  }

  ngOnInit() {

  }

}

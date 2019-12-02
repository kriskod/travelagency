import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() tour: tourStructure
  @Output() removeTour = new EventEmitter<tourStructure>()
 
  constructor() { }

  ngOnInit() {
  }

  onProductRemoved() {
    this.removeTour.emit(this.tour)
  }

  onTourbooked(){
    if(this.tour.leftSeats > 0){
      this.tour.leftSeats -= 1
    }
  }

  onTourCancelled(){
    if(this.tour.leftSeats <= this.tour.maxSeats)
    this.tour.leftSeats += 1
  }

}

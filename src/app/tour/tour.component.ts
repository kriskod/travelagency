import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() tour: tourStructure
  @Output() removeEvent = new EventEmitter<tourStructure>()

  constructor() { }

  ngOnInit() {
  }

  removeProduct() {
    this.removeEvent.emit(this.tour)
  }

}

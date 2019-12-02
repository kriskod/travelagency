import { Component, OnInit, NgModule, Input, EventEmitter, Output } from '@angular/core';
import { BarRatingModule } from "ngx-bar-rating";
import { tourStructure } from '../models/tourStructure.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})

@NgModule({
  imports: [BarRatingModule]
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = " " + '_rating';
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
    })
  }

  constructor() { }

}

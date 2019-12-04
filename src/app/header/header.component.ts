import { Component, OnInit, Output } from '@angular/core';
import { TourService } from '../services/tour.service';
import { tourStructure } from '../models/tourStructure.model';
import { MatDialog } from '@angular/material';
import { AddtourComponent } from '../addtour/addtour.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tourService: TourService, private dialog: MatDialog) {

  }

  onTourAdded(product: tourStructure) {
    this.tourService.addProduct(product)
  }

  onDialogOpened() {
    let dialogRef = this.dialog.open(AddtourComponent, {});

    dialogRef.afterClosed().subscribe(
      (tour: tourStructure) => {
        console.log(tour);
        this.tourService.addProduct(tour)
      });
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { TourService } from '../services/tour.service';
import { tourStructure } from '../models/tourStructure.model';
import { MatDialog } from '@angular/material';
import { AddtourComponent } from '../addtour/addtour.component';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { FilterComponent } from '../filter/filter.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartProductCount: number = 0
  searchTour: any = {}

  constructor(private tourService: TourService,
    private dialog: MatDialog,
    private cartService: ShoppingcartService,
    private authService: AuthService
  ) { }

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

  onFilterClicked() {
    let searchRef = this.dialog.open(FilterComponent, {});

    searchRef.afterClosed().subscribe(
      (filterResult) => {
        console.log(filterResult);
      });
  }

  ngOnInit() {
    this.cartService.cartLength$.subscribe(
      length => {
        console.log(length)
        this.cartProductCount = length;
      }
    )
  }

  onSearchResult(results: any) {
    this.searchTour = results;
  }

  showActiveUser() {

  }
}

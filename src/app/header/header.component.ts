import { Component, OnInit, Output } from '@angular/core';
import { TourService } from '../services/tour.service';
import { tourStructure } from '../models/tourStructure.model';
import { MatDialog } from '@angular/material';
import { AddtourComponent } from '../addtour/addtour.component';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartProductCount: number = 0;

  constructor(private tourService: TourService, private dialog: MatDialog, private cartService: ShoppingcartService) {}

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
    if(this.cartService.getCartProducts().length > 0){
      this.cartProductCount += 1
    }
    
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { TourService } from '../services/tour.service';
import { tourStructure } from '../models/tourStructure.model';
import { MatDialog } from '@angular/material';
import { AddtourComponent } from '../addtour/addtour.component';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { FilterComponent } from '../filter/filter.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FireDbToursService } from '../services/fire-db-tours.service';
import { UserStructure } from '../models/user.model';
import { FireDbUsersService } from '../services/fire-db-users.service';
import { Role } from '../models/role.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;
  cartProductCount: number = 0
  searchTour: any = {}
  user: UserStructure;
  isLoaded = false;
  isAdmin = false;

  constructor(private tourService: TourService,
    private dialog: MatDialog,
    private cartService: ShoppingcartService,
    private authService: AuthService,
    private router: Router,
    private firedb: FireDbToursService,
    private fireDbUserService: FireDbUsersService
  ) { }

  onTourAdded(product: tourStructure) {
    this.tourService.addProduct(product)
  }

  onDialogOpened() {
    let dialogRef = this.dialog.open(AddtourComponent, {});

    dialogRef.afterClosed().subscribe(
      (tour: tourStructure) => {
        console.log(tour);
        tour.leftSeats = tour.maxSeats
        tour.rate = 0
        tour.imagePath = 'assets/malediwy.jpg'
        // this.tourService.addProduct(tour)
        this.firedb.addProduct(tour)
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
    this.showActiveUser();
    this.cartService.cartLength$.subscribe(
      length => {
        console.log(length)
        this.cartProductCount = length;
      }
    )
  }

  showActiveUser() {
    let mail = this.authService.user.email;
    this.fireDbUserService.getUserByMail(mail).subscribe(users => {
      this.user = users[0];
      console.log(this.user)
      this.isAdmin = (this.user.role == Role.Admin)
      this.isLoaded = true;
    }); 
  }

  onSearchResult(results: any) {
    this.searchTour = results;
  }

  logoutUser() {
    this.authService.logout().then(res => {
      this.router.navigateByUrl('/logowanie');
    });
  }
}

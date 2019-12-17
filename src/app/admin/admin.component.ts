import { Component, OnInit } from '@angular/core';
import { UserStructure } from '../models/user.model';
import { tourStructure } from '../models/tourStructure.model';
import { FireDbUsersService } from '../services/fire-db-users.service';
import { FireDbToursService } from '../services/fire-db-tours.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loading = false;
  users: UserStructure[] = [];
  tours: tourStructure[] = [];
  userManagement = false;
  tourManagement = false;
  constructor(private userService: FireDbUsersService, private tourService: FireDbToursService) { }

  ngOnInit() {
  }
  loadUsers(){
    this.offManagment();
    this.loading = true;
    this.userService.getUsers().subscribe(users => {
      this.userManagement = true;
      this.loading = false;
      this.users = users;
      console.log(users)
    })
  }
  loadTours(){
    this.offManagment();
    this.loading = true;
    this.tourService.getTours().subscribe(tours => {
      this.tourManagement = true;
      this.loading = false;
      this.tours = tours;
      console.log(tours)
    })
  }
  offManagment(){
    this.tourManagement = false;
    this.userManagement = false;
  }

  removeProduct(product: tourStructure) {
    this.tourService.removeProduct(product)  
  }

  removeUser(user: UserStructure){
    this.userService.removeUser(user)
  }
}

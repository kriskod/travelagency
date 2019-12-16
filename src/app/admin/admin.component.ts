import { Component, OnInit } from '@angular/core';
import { UserStructure } from '../models/user.model';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/internal/operators/first';
import { tourStructure } from '../models/tourStructure.model';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loading = false;
  users: UserStructure[] = [];
  tours: tourStructure[] = [];

  constructor(private userService: UserService, private tourService: TourService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
      console.log(users)
    })
    this.loading = true;
    this.tourService.getProducts().pipe(first()).subscribe(tours => {
      this.loading = false;
      this.tours = tours;
      console.log(tours)
    })
  }

}

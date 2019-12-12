import { Injectable } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { tourData } from '../tour/tourData.model'
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FireDbToursService {

  tourData;
  
  constructor(private db : AngularFireDatabase) {
    this.tourData = this.db.list('/app/lista-wycieczek/');
   }

  addProduct(tourId: tourStructure){
    let tour = this.db.object(`/app/lista-wycieczek/${tourId.id}`).set(tourId);
    return tour;
    }
  
  removeProduct(tour: tourStructure){
    this.db.object(`/app/lista-wycieczek/${tour}`).remove();
  }

  getTours(){
    return this.db.list('/app/lista-wycieczek/').valueChanges();
  }

  
}

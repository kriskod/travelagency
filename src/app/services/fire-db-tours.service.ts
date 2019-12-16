import { Injectable } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { tourData } from '../tour/tourData.model'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FireDbToursService {

  tourData;

  constructor(private db: AngularFireDatabase) {
    // this.tourData = this.db.list('/wycieczki/');
  }

  addProduct(tour: tourStructure) {
    let pushid = this.db.createPushId()
    tour.id = pushid;
    return this.db.object(`/wycieczki/${pushid}`).set(tour);
  }

  removeProduct(tour: tourStructure) {
    this.db.object(`/wycieczki/${tour.id}`).remove();
  }

  getTours() {
    return this.db.list('/wycieczki/').valueChanges();
  }

  getTour(id: string): Observable<tourStructure> {
    return this.db.object<tourStructure>(`/wycieczki/${id}`).snapshotChanges().pipe(map(
      res => res.payload.val()
    ))
  }


}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { tourStructure } from '../models/tourStructure.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStructure } from '../models/user.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FireDbUsersService {
  
  userData;

  constructor(private db: AngularFireDatabase) {
    // this.tourData = this.db.list('/wycieczki/');
  }

  addUser(user: UserStructure) {
    let pushid = this.db.createPushId()
    user._id = pushid;
    return this.db.object(`/uzytkownicy/${pushid}`).set(user);
  }

  removeUser(user: UserStructure) {
    this.db.object(`/uzytkownicy/${user._id}`).remove();
  }

  getUsers() {
    return this.db.list<UserStructure>('/uzytkownicy/').valueChanges();
  }

  getUser(id: string): Observable<UserStructure> {
    return this.db.object<UserStructure>(`/uzytkownicy/${id}`).snapshotChanges().pipe(map(
      res => res.payload.val()
    ))
  }

  getUserByMail(email: string){
    return this.db.list<UserStructure>(`/uzytkownicy/`, ref => ref.orderByChild('email').equalTo(email)).valueChanges();
  }

  

}

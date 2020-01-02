import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private db: AngularFireDatabase) { }

  // getToursFromReservation(order: Order) {
  //   let orderID = this.db.createPushId();
  //   order.tour_id = orderID;
  //   return this.db.object(`/orders/${orderID}`).set(order);
  // }

}

import { Injectable } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { tourData } from '../tour/tourData.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private toursApiUrl = 'api/tours' 

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<tourStructure[]>(this.toursApiUrl);
  }

  getProduct(id: number) {
    return this.httpClient.get<tourStructure>(`${this.toursApiUrl}/${id}`);
  }

  addProduct(product: tourStructure) {
    //tourData.push(product);
    product.leftSeats = product.maxSeats
    product.rate = 0
    product.imagePath = 'assets/malediwy.jpg'
    return this.httpClient.post<tourStructure>(this.toursApiUrl, product)
  }

  deleteProduct(product: tourStructure) {
    // let index = tourData.indexOf(product)
    // if (index > - 1) {
    //   tourData.splice(index, 1);
    // }
    let id = product.id
    return this.httpClient.delete<tourStructure>(`${this.toursApiUrl}/${id}`)
  }
}

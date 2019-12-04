import { Injectable } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';
import { tourData } from '../tour/tourData.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  getProducts(): tourStructure[] {
    return tourData;
  }

  getProduct(id: number): tourStructure {
    return tourData[id];
  }

  addProduct(product: tourStructure) {
    tourData.push(product);
  }

  deleteProduct(product: tourStructure) {
    let index = tourData.indexOf(product)
    if (index > - 1) {
      tourData.splice(index, 1);
    }
  }
}

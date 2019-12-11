import { Injectable } from '@angular/core';
import { tourData } from '../tour/tourData.model';
import { tourStructure} from '../models/tourStructure.model'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    return{
      tours: tourData
    }
  }
  constructor() { }
}


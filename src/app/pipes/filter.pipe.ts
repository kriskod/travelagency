import { Pipe, PipeTransform } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tours: tourStructure[], searchTerm: string): tourStructure[] {
    return tours.filter( tour => {
      if(this.filterSearchPrice(tour, searchTerm) == true && this.filterSearchCountry(tour, searchTerm) == true && this.filterSearchDate(tour, searchTerm) == true)
      return true
      else
      return console.log("Coś tu nie trybi")
    })

  }

  filterSearchPrice(tour: tourStructure, searchTerm: any) {
    var lesser = (searchTerm['minPrice'] ? (searchTerm.price > ['minPrice']) : true)
    var bigger = (searchTerm['maxPrice'] ? (searchTerm.price < ['maxPrice']) : true)
    var result = lesser && bigger
    return result;
  }

  filterSearchDate(tour: tourStructure, searchTerm: any) {
    return (searchTerm['minDate'] ? (searchTerm.startDate > ['minDate']) : true) && (searchTerm['maxDate'] ? (searchTerm.finishDate < ['maxDate']) : true)
  }

  filterSearchCountry(tour: tourStructure, searchTerm: any) {
    var whereThisTour = (searchTerm['destination'] ? (searchTerm.destinationCountry.filter(country => 
      country['destination'])) : true)
    return whereThisTour
  }
}

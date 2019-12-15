import { Pipe, PipeTransform } from '@angular/core';
import { tourStructure } from '../models/tourStructure.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tours: tourStructure[], searchTerm: string): tourStructure[] {
    return tours.filter(tour => {
      if (tour.destinationCountry.toLowerCase().includes(searchTerm.toLowerCase()))
        return true
      else
        return false
    })
  }

}

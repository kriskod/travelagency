import { Injectable } from '@angular/core';
import { currency } from '../models/tourStructure.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  currencyChange = new Map(
    [
      [currency.PLN, 1],
      [currency.EUR, 4.27],
      [currency.USD, 3.85],
      [currency.GBP, 5.08]
    ]
  )

  conversion(price: number, currency: currency) {
    return price * this.currencyChange.get(currency)
  }

}

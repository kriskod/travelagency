import { Injectable } from '@angular/core';

export enum Currency{
 PLN,
 EUR,
 USD,
 GBP
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }


  currencyChange = new Map(
    [
      [Currency.PLN, 1],
      [Currency.EUR, 4.27],
      [Currency.USD, 3.85],
      [Currency.GBP, 5.08]
    ]
  )

  changeMoney(price: number, currency: Currency) {
    return price * this.currencyChange.get(currency)
  }

}

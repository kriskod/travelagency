import { PipeTransform, Pipe } from '@angular/core';
import { Currency } from '../models/tourStructure.model';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
    name: 'Currency'
})

export class CurrencyPipe implements PipeTransform {
    transform(
        value: number,
        currencyCode: string = 'EUR',
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean = 'symbol',
        digitsInfo: string = '3.2-2',
        locale: string = 'fr',
    ): string | null {
        return formatCurrency(
          value,
          locale,
          getCurrencySymbol(currencyCode, 'wide'),
          currencyCode,
          digitsInfo,
        );
    }
}
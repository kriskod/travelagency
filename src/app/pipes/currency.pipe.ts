import { PipeTransform, Pipe } from '@angular/core';
import { Currency } from '../models/tourStructure.model';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
    name: 'Currency'
})

export class CurrencyPipe implements PipeTransform {

    transform(){}
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, symbol: string = '$'): string {
    if (value == null) return '';
    return `${symbol}${value.toFixed(2)}`;
  }
}

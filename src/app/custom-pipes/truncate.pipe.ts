import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 20,
    completeWords: boolean = false,
    ellipsis: string = '...'
  ): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    if (completeWords) {
      limit = value.slice(0, limit).lastIndexOf(' ');
    }
    return value.slice(0, limit) + ellipsis;
  }
}

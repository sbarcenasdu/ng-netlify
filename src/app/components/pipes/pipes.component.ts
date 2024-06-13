import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  KeyValuePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    KeyValuePipe,
    PercentPipe,
    DecimalPipe,
    SlicePipe,
    AsyncPipe,
  ],
  template: `
    <div>
      <p>Original Date: {{ currentDate }}</p>
      <p>Formatted Date: {{ currentDate | date : 'fullDate' | uppercase }}</p>
      <p>Formatted Date: {{ currentDate | date : 'yyyy' }}</p>
      <p>Formatted Date: {{ currentDate | date : 'hh:mm' : 'UTC' }}</p>
      <p>Formatted Date: {{ currentDate | date : 'hh:mm' : 'local' }}</p>
      <p>Formatted Date: {{ currentDate | date : 'hh:mm' : '-0400' }}</p>
    </div>

    <div>
      <p>Original Price: {{ price }}</p>
      <p>Formatted Price: {{ price | currency : 'EUR' }}</p>
    </div>

    <div>
      <p>Original Name: {{ name }}</p>
      <p>Uppercase Name: {{ name | uppercase }}</p>
      <p>Lowercase Name: {{ name | lowercase }}</p>
    </div>

    <div>
      <p>JSON Data: {{ data.key2 }}</p>
      <p>JSON Data: {{ data | json }}</p>
    </div>

    <div>
      @for (item of data | keyvalue; track item) {
      <p>{{ item.key }}: {{ item.value }}</p>
      }
    </div>

    <div>
      <pre>{{ data | json }}</pre>
    </div>
    <div>
      <p>El descuento es de: {{ discount | percent }}</p>
    </div>

    <div>
      <p>{{ pi | number : '1.2-5' }}</p>
    </div>

    <div>
      <ul>
        @for (item of items | slice : 0 : 3; track $index ) {
        <li>{{ item | uppercase }}</li>
        }
      </ul>
    </div>
  `,
  styles: `
  :host{
    display:block;
    min-height: 70vh;
    font-size: 1.2rem;
  }

  div{
    margin: 10px;
    padding: 10px;
    border: 1px solid #333;
  }

  `,
})
export class PipesComponent {
  currentDate = new Date();
  price = 1234.56;
  name = 'Pedro Alonso';
  data = {
    key: 'value',
    key2: 'value2',
    key3: 'value3',
  };

  discount = 0.25;
  pi = Math.PI;

  items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  //****** */

  // data$: Observable<string> = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next('Data from Observable');
  //   }, 2000);
  // });
  //error al usar "as" en async pipe en html

  observable = interval(1000).pipe(switchMap(() => of('New Observable')));
  //se debe mostrar con ngOnInit con una funcion flecha con log
}

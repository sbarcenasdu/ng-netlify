import { Component } from '@angular/core';
import { GreetPipe } from '../../custom-pipes/greet.pipe';
import { CapitalizePipe } from '../../custom-pipes/capitalize.pipe';
import { CustomCurrencyPipe } from '../../custom-pipes/custom-currency.pipe';
import { TruncatePipe } from '../../custom-pipes/truncate.pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [GreetPipe, CapitalizePipe, CustomCurrencyPipe, TruncatePipe],
  template: `
    <p>custom-pipes works!</p>
    <div>
      <p>{{ name | greet }}</p>
    </div>

    <div>
      <p>{{ phrase | capitalize }}</p>
    </div>

    <div>
      <p>Precio: {{ cost | customCurrency }}</p>
    </div>

    <div>
      <p>{{ paragraph | truncate : 45 : true : '...' }}</p>
    </div>
  `,
  styles: ``,
})
export class CustomPipesComponent {
  name = 'Pedro Alonso';
  phrase = 'frase en minúsculas a b c ';
  cost = 100;
  paragraph =
    'Frase para ser truncada en xx caracteres. Si estableces en "true" no quedarán palabras incompletas.';

}

import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import {
  fadeInAnimation,
  slideInLeftAnimation,
} from '../../animations/animations';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [],
  animations: [fadeInAnimation, slideInLeftAnimation],
  template: `
    <p>alert-dialog works!</p>
    <!-- <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded shadow-md text-center">
        <h2 class="text-xl font-semibold mb-4">Acceso denegado</h2>
        <p class="mb-4">Debes iniciar sesión para acceder a esta página.</p>
        <button  class="bg-blue-500 text-white px-4 py-2 rounded">Aceptar</button>
      </div>
    </div> -->
  `,
  styles: `
  `,
})
export class AlertDialogComponent {}

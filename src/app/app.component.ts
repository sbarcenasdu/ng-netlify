import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoaderService } from './services/loader.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { slideInLeftAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AsyncPipe,
    LoaderComponent,
  ],
  template: `
    <!-- <app-header />
    <div class="min-h-[70vhs]">
      <router-outlet />
    </div>
    @if(isLoading$ | async){
    <app-loader></app-loader>
    }
    <app-footer /> -->
    <app-header></app-header>
    <div class="min-h-[70vh] relative">
      <router-outlet />
      <!-- @if(isLoading$ | async){ <app-loader></app-loader> } -->
    </div>
    <app-footer></app-footer>
  `,
  styles: ``,
  animations: [slideInLeftAnimation],
})
export class AppComponent {
  title = 'rickandmorty';
  private loaderService = inject(LoaderService);
  isLoading$ = this.loaderService.isLoading$;
}

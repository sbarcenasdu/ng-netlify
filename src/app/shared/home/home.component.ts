import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <p>home works!</p>
    <br />
    <button (click)="login()">Login</button>
    <br />
    <button (click)="logout()">Logout</button>
    <router-outlet />
  `,
  styles: `
  :host {
      display: block;
      height: 70vh;
    }
  `,
})
export class HomeComponent implements OnInit{
  private authService = inject(AuthService);
  private loaderService = inject(LoaderService);

 
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // this.loaderService.hide();
    
  }
}

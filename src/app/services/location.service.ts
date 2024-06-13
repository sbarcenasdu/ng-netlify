import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Location } from '../models/location';
import { Observable, catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private http = inject(HttpClient);
  // private apiUrl = 'https://rickandmortyapi.com/api/location';
  private apiUrl = environment.apiBaseUrl + environment.endpoints.locations;

  constructor() {}

  getAlllocations(): Observable<Location[]> {
    return this.http.get<{ results: Location[] }>(this.apiUrl).pipe(
      map((response) => response.results),
      catchError((error) => {
        throw error;
      })
    );
  }
}

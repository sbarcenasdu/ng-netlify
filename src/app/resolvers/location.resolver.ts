import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

export const locationResolver: ResolveFn<Location[]> = (route, state) => {
  const locationService = inject(LocationService);
  const loaderService = inject(LoaderService);
  const router = inject(Router);

  console.log('Entra a locationResolver');

  return locationService.getAlllocations().pipe(
    catchError((error) => {
      console.error('Hubo un error al cargar las ubicaciones: ', error);
      router.navigate(['/']);
      return of([]);
    }),
  );
};

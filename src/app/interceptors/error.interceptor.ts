import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    // catchError((error: HttpErrorResponse) => {
      
    //   let errorMessage = '';
    //   if (error.error instanceof ErrorEvent) {
    //     errorMessage = `Error: ${error.error.message}`;
    //   } else {
    //     errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    //   }
    //   throw errorMessage;
    // })
    tap({
      next: (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Respuesta recibida:', event);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
      }
    })
  );
};

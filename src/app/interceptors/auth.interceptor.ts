import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
    
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Entra a authInterceptor');
  const authService = inject(AuthService);
  const isAuthenticated = authService.checkAuthentication();
  let authReq = req;

  if (isAuthenticated) {
    const authToken = 'your-auth-token';
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` },
    });
  }
  console.log('Request with Authorization Header and AuthService:', authReq);

  return next(authReq);
};

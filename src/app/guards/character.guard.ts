import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

export const characterGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const loaderService = inject(LoaderService);
  const router = inject(Router);

  console.log('Entra a characterGuard');
  // loaderService.show();
  if (authService.checkAuthentication()) {
    return true;
  } else {
    // Aquí podrías redirigir al usuario a la página de inicio de sesión
    console.log(
      'Acceso denegado: Debes iniciar sesión para acceder a esta página'
    );
    router.navigate(['/']);
    // loaderService.hide();
    return false;
  }
};

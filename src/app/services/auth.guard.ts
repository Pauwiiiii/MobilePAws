// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from './storage/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageservice = inject(StorageService);

  return storageservice.getStorage("userid").then(userid => {
    if (userid && userid.value) {
      return true;  // User is logged in
    } else {
      // If not logged in, redirect to login page with the intended URL to return to
      router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;  // Prevent access
    }
  });
};



//   if (!isLoggedIn) {
//     router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
//   return true;
// };

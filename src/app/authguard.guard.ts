import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguarServicesService } from './Services/AuthguardServices/authguar-services.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private Authguardservice : AuthguarServicesService, private router: Router) { }

    canActivate(): boolean {
      if (this.Authguardservice.gettoken()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
  
}

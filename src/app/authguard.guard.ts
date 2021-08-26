import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardservicesService } from './authguardservices.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private Authguardservice : AuthguardservicesService,private router: Router){}
canActivate() :boolean
{
  if (!this.Authguardservice.gettoken()) {  
    return true;
  } else {
    this.router.navigateByUrl("/login"); 
    return false;
  }
}
} 

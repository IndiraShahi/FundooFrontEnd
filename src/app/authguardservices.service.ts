import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardservicesService {

  constructor() { }
gettoken(){
  return !!localStorage.getItem("FunDooJwt");
}
}

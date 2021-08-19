import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  constructor( private http : HttpservicesService) { }
  registerUser(data:any) {
    console.log(" data in user services ", data );
    return this.http.Post('/User/Register', data,null,false);
    
  }
  loginUser(data:any) {
    console.log(" login user services ", data );
    return this.http.Post('/User/Login', data,null,false);
  }
}
  
  

  
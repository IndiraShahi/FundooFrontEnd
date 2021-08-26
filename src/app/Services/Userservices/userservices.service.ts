import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  constructor( private http : HttpservicesService) { }

  
  registerUser(data:any) {
    console.log(" data in user services ", data );
    return this.http.Post('User/Register', data,null);
    
  }
  loginUser(data:any) {
    console.log(" login user services ", data );
    return this.http.Post('User/Login', data,null);
  }
  forgetUser(data:any) {
    console.log(" forget user services ", data );
    return this.http.Post('User/forgotpassword', data,null);
  }
  resetUser(token:any,data: any) {
     
    console.log("given data is", data);
    
    return this.http.put('User/resetpassword', data, token);
  }
}  
  
 
  

  
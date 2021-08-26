import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {


  token: any;
  baseUrl = environment.Baseurl;
  constructor(private http: HttpClient) { }


  Post(url:any,data:any,token:any){
    this.token=localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.baseUrl + url, data,options);
  }
  Get(url: any,token: any,headers: boolean){
    
    return this.http.get(this.baseUrl + url);
  }
  GetallNotes(url: any) {
    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.baseUrl+url,options);
  }
  put(url:any,data:any,token:any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
     
    console.log(data,url);
  
    //connection with backend 
    return this.http.put(this.baseUrl + url, data,options);
  }
  delete(id: any){
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }),
    }
    return this.http.delete(this.baseUrl + 'Notes?notesId='+ id, options);
  }
  }
  
  
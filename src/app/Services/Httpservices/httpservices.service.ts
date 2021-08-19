import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  baseUrl = environment.Baseurl;
  constructor(private http: HttpClient) { }
  Post(url:any,data:any,token:any,headers:boolean){
    console.log(data,url);
    return this.http.post(this.baseUrl + url, data);
  }
  Get(){}
  Put(){}
  Delete(){}
}

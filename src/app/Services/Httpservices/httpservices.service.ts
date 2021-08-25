import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  baseUrl = environment.Baseurl;
  https = new HttpHeaders();
  constructor(private http: HttpClient) { }
  Post(url:any,data:any,token:any,headers:boolean){
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.baseUrl + url, data);
  }
  Get(url: any, headers: any){
    if(headers != null)
    {return this.http.get(this.baseUrl + url, headers);}
    return this.http.get(this.baseUrl + url);
  }
  put(url:any,data:any,token:any,headers:boolean){
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
  Delete(){}
  }
  
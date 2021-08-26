import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';
@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
  constructor(  private http:HttpservicesService ) { }


  GetAllNotes(url:any){
    console.log("given data is", url);
    return this.http.GetallNotes(url);
   }
  createNote(token:any,data: any) {
    return this.http.Post('Notes', data,token)

  }

  deleteNote(data: any) {
    return this.http.delete(data);

  }
}
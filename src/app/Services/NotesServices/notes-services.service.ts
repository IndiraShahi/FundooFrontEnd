import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';
@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
  constructor(  private http:HttpservicesService ) { }
  createNote(token:any,data: any) {
    return this.http.Post('notes', data,  token, true)

  }
}
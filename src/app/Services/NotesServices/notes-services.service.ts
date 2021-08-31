import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';
@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
  constructor(  private http:HttpservicesService ) { }
  GetAllNotes(url: any) {
    console.log("given data is", url);
    return this.http.GetallNotes(url);
  }
  
  createNote(token: any, data: any) {
    return this.http.createNote('Notes', data);

  }
  //delete Notes
  deleteNote(data: any) {
    return this.http.delete(data);

  }
  getAllarchive(url: any) {
    console.log("given data is", url);
    return this.http.GetAllArchive(url);
  }
  getAllTrash(url: any) {
    console.log("given data is", url);
    return this.http.GetAllTrash(url);
  }
  UpdateExistingNote(data: any) {
    return this.http.UpdateNote(data);
  }
  trashNote(data: any) {
    return this.http.TrashNote(data);
  }
  archiveNote(data: any) {
    return this.http.archiveNote(data);
  }
}

  
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
    return this.http.post(this.baseUrl + url, data);
  }
  Get(url: any,token: any,headers: boolean){
    
    return this.http.get(this.baseUrl + url);
  }
  
  put(url:any,data:any,token:any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
     
    console.log(data,url); 
    return this.http.put(this.baseUrl + url, data,options);
  }
  
  AddUser(url: any, data: any, token: any, headers: boolean) {
    return this.http.post(this.baseUrl + url, data);

  }

  // get all notes
  GetallNotes(url: any) {
    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.baseUrl + url, options);
  }
  createNote(url: any, data: any){
    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
      return this.http.post(this.baseUrl+ url,data,options);

  }



  // get all archive
  GetAllArchive(url: any) {
    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.baseUrl + url, options);
  }
  //get all trash
  GetAllTrash(url: any) {
    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.baseUrl + url, options);
  }

  //update notes
  UpdateNote(id: any) {
    console.log(id);
    const data = {
      Title: id.title,
      WrittenNote: id.writtenNote
    }
    console.log(data);
    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.baseUrl + `Notes/${id.noteId}`, data, options);
  }
  //trash note notes
  TrashNote(id: any) {
    console.log(id);

    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    console.log(options);
    return this.http.delete(this.baseUrl + `Notes/${id.noteId}/Trash`,options);
  }


  //trash note notes
  archiveNote(id: any) {
    console.log(id);

    let token = localStorage.getItem('FunDooJwt');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    console.log(options);
    return this.http.put(this.baseUrl + `Notes/${id.NotesId}/Archive`, null,options);
  }

  //delete note
  delete(id: any) {
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }),
    }
    return this.http.delete(this.baseUrl + 'Notes?notesId=' + id, options);
  }
}

  
import { Component, OnInit,Output } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit 
{
  title = ''
  writtenNote = ''
  isOpen = true;
  token: any;
  fullEdit: boolean = false;

  pin: boolean = false;

  isReminder = false;
  isArchive = false;
  isPin = false;
  isTrash = false;
  //@Output() createNoteRefersh = new EventEmitter;
  click() {
    this.isOpen = true;
  }
  constructor(private note: NotesServicesService, private activeRoute: ActivatedRoute) { }
   @Output() createNoteRefersh = new EventEmitter<string>();

  ngOnInit(): void {
    // this.token = this.activeRoute.snapshot.paramMap.get('token');

  }


  addNote() {
    let data = {
      Title: this.title,
      WrittenNote: this.writtenNote,
      IsArchive: this.isArchive,
      IsPin: this.isPin,
      IsBin: this.isTrash
    }
    this.token = localStorage.getItem('Token');
    console.log(" add note data ", data);
if(this.title && this.writtenNote){
  this.note.createNote(this.token, data).subscribe((response) => {
    console.log(response);
    let message = "note created successfull";
    console.log(message);
    this.createNoteRefersh.emit(message);
  })
} else {
  this.fullEdit = false;
}
   

  }
  togglePin() {
    this.pin = !this.pin;
  }
  displayFull() {
    this.fullEdit = true;
  }
}
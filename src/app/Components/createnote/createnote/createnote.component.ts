import { Component, OnInit,Output } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  isMoreOpen = false;
  pin: boolean = false;
  isCreated = false;
  isReminder = false;
  isArchive = false;
  isTrash = false;
  red = "";
  white = "";
  green = "";
  orange = "";
  pink = "";
  yellow = "";
  blue = "";
  purple = "";
  grey = "";
  colorString:any
  click() {
    this.isOpen = true;
  }
  constructor(private note: NotesServicesService, private activeRoute: ActivatedRoute,public snackBar: MatSnackBar) { }
   @Output() createNoteRefersh = new EventEmitter<string>();

  ngOnInit(): void {
  }
  receivecolor(value: any) {
    console.log(" event in ",value);
    this.Color = value;
  }
  Color(colorCode: any) {
    this.colorString = colorCode
    console.log(colorCode);
  }
  getColor() {
    return {
      'bg-red': this.colorString === '#E75F5F',
      'bg-white': this.colorString === '#FFFFFF',
      'bg-green': this.colorString === '#65E665',
      'bg-orange': this.colorString === '#E28011',
      'bg-pink': this.colorString === '#EE6CE3',
      'bg-yellow': this.colorString === '#E7DA65',
      'bg-blue': this.colorString === '#5EADEE',
      'bg-purple': this.colorString === '#BEE7AEB',
      'bg-grey': this.colorString === '#C3C0C086'
    }
  }

  addNote() {
    let data = {
      Title: this.title,
      WrittenNote: this.writtenNote,
      IsArchive: this.isArchive,
      Color: this.colorString,
      IsPin: true,
      IsBin: this.isTrash
    }
    console.log(data)
    this.token = localStorage.getItem('FunDooJwt');
    console.log(" add note data ", data);
    if(this.title && this.writtenNote){
    this.note.createNote(this.token, data).subscribe((response) => {
    console.log(response);
    let message = "note created successfull";
    console.log(message);
    this.createNoteRefersh.emit(message);
    this.title = "";
    this.writtenNote = "";
    this.colorString ="";
    this.snackBar.open("Note Created Successfully..."," ",{ duration: 2000});
    this.fullEdit = false;
    },
    error => {
      console.log("error in register", error);
      this.snackBar.open("Creating Note fail.....", " ", { duration: 2000 });
      this.fullEdit = false;

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
import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  title = ''
  description = ''
  isOpen = true;
  token: any;
  fullEdit : boolean = false;
  pin : boolean = false;

  click() {
    this.isOpen = true;
  }

  constructor(private note: NotesServicesService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addNote() {
    let data = {
      title: this.title,
      description: this.description
    }
    this.token = localStorage.getItem('Token');
    console.log(" add note data ", data);

    this.note.createNote(this.token,data).subscribe((response) => {
      console.log(response);
      let message = "note created successfull";
      //this.messageEvent.emit(message);
    })
    
  }
  togglePin(){
    this.pin = !this.pin; 
  } 
  displayFull(){
    this.fullEdit = true;
  }
}


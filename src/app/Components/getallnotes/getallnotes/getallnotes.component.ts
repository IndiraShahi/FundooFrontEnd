import { Component, Input, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  
  token: any;
  isTrash = true
  @Input() noteArray: any = []
  constructor( private noteservices : NotesServicesService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes() {
    this.noteservices.GetAllNotes('Notes').subscribe((response: any) => {
      console.log(response);
      this.noteArray = response.data;
      console.log(this.noteArray);
  
    }
    )
  }
  deleteNote(note: any) {
    let data = {
      IsBin: this.isTrash
    }
    this.noteservices.deleteNote(note).subscribe(data => {
      console.log(data);
      this.GetAllNotes();
    })
  }
}


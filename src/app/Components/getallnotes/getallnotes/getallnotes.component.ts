import { Component, OnInit, Input} from '@angular/core';
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
  notesArray: any = []
  //@Input() noteArray: any = []
  constructor(private note: NotesServicesService, private activeRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.GetAllNotes();
  }

  GetAllNotes() {
    this.note.GetAllNotes('Notes').subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data;
      this.notesArray.reverse();
      console.log(this.notesArray);
    }
    )
  }
  refreshNotes(value:any ){
    console.log(value);
    this.GetAllNotes();
  }
}
  
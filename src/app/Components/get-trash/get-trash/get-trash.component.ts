import { Component, OnInit,Input } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit {
  notesArray: any = [];
  isTrash = true

  constructor(private note: NotesServicesService) { }


  ngOnInit(): void {
    this.GetAllTrash();
  }

  GetAllTrash() {
    this.note.getAllTrash('Notes/Trash').subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data;
      this.notesArray.reverse();
      console.log(this.notesArray);

    }
    )
  }
  deleteNote(note: any) {
    let data = {
     // isTrash: this.isTrash
    }
    this.note.deleteNote(note).subscribe(data => {
      console.log(data);
      this.GetAllTrash();
    })
  }
}


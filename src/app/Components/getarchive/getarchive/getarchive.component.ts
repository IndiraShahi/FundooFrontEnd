import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
@Component({
  selector: 'app-getarchive',
  templateUrl: './getarchive.component.html',
  styleUrls: ['./getarchive.component.scss']
})
export class GetarchiveComponent implements OnInit {
  notesArray: any = [];
  isTrash = true
  constructor(private notes: NotesServicesService,private activeroute :ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllArchive();

  }
  GetAllArchive() {
    this.notes.GetAllNotes('Notes/Archive').subscribe((response : any) => {
      console.log(response);
      this.notesArray = response.data;
      this.notesArray.reverse();
      console.log(this.notesArray);
    });
    
  }
  deleteNote(note: any) {
    let data = {
      isTrash: this.isTrash
    }
    this.notes.deleteNote(note).subscribe(data => {
      console.log(data);
      this.GetAllArchive();
    })
  }
}
import { Component,  Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { DialogueContentComponent } from '../../dialogue-content/dialogue-content/dialogue-content.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpservicesService } from 'src/app/Services/Httpservices/httpservices.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  token: any;
  op: any
  iconVisible: any
  isTrash = true
  @Input() allNotes: any = []
  @Output() UpdateNote = new EventEmitter<any>();
 
  constructor(private note: NotesServicesService, private mate: MatDialog) { }

  ngOnInit(): void 
  {

  }
  openDialog(note: any) {
    let dialogRef = this.mate.open(DialogueContentComponent, {
      width: '500px',
      data: note
    });
    dialogRef.afterClosed().subscribe()
  }
  deleteNote(note: any) {
    let data = {
      IsBin: this.isTrash
    }
    this.note.deleteNote(note).subscribe(data => {
      console.log(data);
      // this.GetAllNotes();
    })
  }
  //Call this function on trash icon u r done
  trashNote() {
    let reqPayload = {
     // NotesId: this.cardUpdateForm.value.notesId,
    }
    this.note.trashNote(reqPayload).subscribe((response:any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
 
  mouseEnter() {
    this.iconVisible = true;
  }

  mouseLeave() {
    this.iconVisible = false;
  }
}

  
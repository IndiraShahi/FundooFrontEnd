import { Component,  Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { DialogueContentComponent } from '../../dialogue-content/dialogue-content/dialogue-content.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpservicesService } from 'src/app/Services/Httpservices/httpservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServicesService } from 'src/app/Services/data-services.service';
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
 
  constructor(private note: NotesServicesService, private mate: MatDialog, public snackBar: MatSnackBar,private dataservice: DataServicesService) { }

  ngOnInit(): void 
  {
    this.dataservice.recievedMessage.subscribe(response => console.log(response))
  }
  openDialog(note: any) {
    let dialogRef = this.mate.open(DialogueContentComponent, {
      width: '500px',
      data: note,
      backdropClass: ''
    });
    dialogRef.afterClosed().subscribe()
  }
  deleteNote(note: any) {
    let data = {
      IsBin: this.isTrash
    }
    this.note.deleteNote(note).subscribe(data => {
      console.log(data);
    })
  }
  trashNote() {
    let reqPayload = {
    }
    this.note.trashNote(reqPayload).subscribe((response:any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
  updateColor(id: any, color: string) {
    let reqPayload = {
    }
    this.note.updateColor(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
      this.snackBar.open("Note Updated Successfully.....", " ", { duration: 2000 });
    }, error => {
      console.log("error in register", error);
      this.snackBar.open("Updating Note fail.....", " ", { duration: 2000 });

    })
  }
  mouseEnter() {
    this.iconVisible = true;
  }

  mouseLeave() {
    this.iconVisible = false;
  }
}

  
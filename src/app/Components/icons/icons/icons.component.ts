import { Component, OnInit, Output,Input,EventEmitter,Inject } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  colorpanel!: FormGroup;
  @Input() card: any;
  @Output() onChangeColor = new EventEmitter();
  op: any
  @Output() onArchiveChange = new EventEmitter();
  @Output() UpdateNote = new EventEmitter<any>();
  constructor(public noteService: NotesServicesService, @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,private snackbar: MatSnackBar) { }



  ngOnInit(): void {
console.log("card is inicon component", this.card);
  }
  updateColor(id: any, color: string) {
    console.log(id);
    if (id === undefined) {
      this.onChangeColor.emit(color);
      console.log("Undeifined Card of color ", color);
    } else {

      console.log(id, color);

      let reqPayload = {
        noteId: id,
        color: color
      }
      console.log(color);
      this.noteService.updateColor(reqPayload).subscribe((response: any) => {
        this.op = response.data;
        window.location.reload();
        this.UpdateNote.emit(this.op);
        this.snackbar.open('color changed succesfully', '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    }
  }
  
  deleteNote(note: any) {
    console.log(note);
    this.noteService.deleteNote(note).subscribe(data => {
      window.location.reload()
    })
  }
  archiveNote() {
    console.log(this.card.noteId);
    let reqPayload = {
      noteId: this.card.noteId,
    }
    this.noteService.archiveNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
  //Trash Note
  trashNote(data: any) {
    console.log(this.card.noteId);
    console.log(data, '------');
    let reqPayload = {
      noteId: this.card.noteId,
    }
    this.noteService.trashNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
}

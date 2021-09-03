import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-content',
  templateUrl: './dialogue-content.component.html',
  styleUrls: ['./dialogue-content.component.scss']
})
export class DialogueContentComponent implements OnInit {

  cardUpdateForm!: FormGroup;
  op: any
  pin: boolean = false;
  @Output() UpdateNote = new EventEmitter<any>();
  notesArray: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private noteService: NotesServicesService
  ) { }

  ngOnInit(): void {
    this.cardUpdateForm = this.formBuilder.group({
      noteId: this.data.noteId,
      title: this.data.title,
      color: this.data.color,
      writtenNote: this.data.writtenNote
    })
  }
  updateNote(data: any) {
    let reqPayload = {
      noteId: this.cardUpdateForm.value.noteId,
      title: this.cardUpdateForm.value.title,
      writtenNote: this.cardUpdateForm.value.writtenNote
    }
    //new trash function rhega like  UpdateExistingNote usme sirf note id pass krna  "NotesId: this.cardUpdateForm.value.notesId"
    this.noteService.UpdateExistingNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      this.op.reverse();
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })

  }
  
  refreshNotes(value:any ){
    console.log(value);
   // this.UpdateNote();
  }

  updateColor(id: any, color: string) {
    let reqPayload = {
      noteId: id,
      color: color
    }
    console.log(reqPayload);
    this.noteService.updateColor(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      console.log(this.op);
      window.location.reload();
      //this.updateColor.emit(this.op);
    })
  }
  GetAllNotes() {
    this.noteService.GetAllNotes('Notes').subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data;
      this.notesArray.reverse();
      console.log(this.notesArray);

    }
    )
  }
  //Call this function on trash icon u r done
  trashNote(data:any) {
    console.log(data,'------');
    let reqPayload = {
      noteId: this.cardUpdateForm.value.noteId,   
    }
    this.noteService.trashNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
   //Call this function on trash icon u r done
   archiveNote() {
    let reqPayload = {
      noteId: this.cardUpdateForm.value.noteId,
    }
    this.noteService.archiveNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
  togglePin(){
    this.pin =!this.pin;
  }
}
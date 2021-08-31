import { Component, OnInit, Output,EventEmitter,Inject } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  colorpanel!: FormGroup;

  op: any
  @Output() UpdateNote = new EventEmitter<any>();
  constructor(public noteService: NotesServicesService, @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {

  }
  deleteNote(note: any) {
    console.log(note);
    this.noteService.deleteNote(note).subscribe(data => {
      window.location.reload()
    })
  }
  // //Call this function on trash icon u r done
  // trashNote() {
  //   let reqPayload = {
  //     NotesId: this.cardUpdateForm.value.notesId,
  //   }
  //   this.noteService.trashNote(reqPayload).subscribe((response:any) => {
  //     this.op = response.data;
  //     this.UpdateNote.emit(this.op);
  //   })
  // }
}
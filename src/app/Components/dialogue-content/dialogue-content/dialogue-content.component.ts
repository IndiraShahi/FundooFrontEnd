import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServicesService } from 'src/app/Services/data-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialogue-content',
  templateUrl: './dialogue-content.component.html',
  styleUrls: ['./dialogue-content.component.scss']
})
export class DialogueContentComponent implements OnInit {
  cardForm!: FormGroup;
  output: any;
  color: any
  @Output() messageEvent = new EventEmitter<any>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private noteService: NotesServicesService,
    private _snackBar: MatSnackBar,
    private dataService: DataServicesService
  ) 
  {
    console.log(data);
     this.color = '#'.concat(data.color)
     console.log(this.color);
  }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      title: this.data.title,
      writtenNote: this.data.writtenNote
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
    });
  }

  updateNote() {
    let reqPayload = {
      noteId: this.data.noteId,
      title: this.cardForm.value.title,
      writtenNote: this.cardForm.value.writtenNote,
      color:this.data.color
    }
    this.noteService.UpdateExistingNote(reqPayload).subscribe((response: any) => {
      this.output = response;
      this.openSnackBar(this.output.message);
      this.dataService.sendMessage(this.output.data);
    },
      (      error: { message: string; }) => {
        this.openSnackBar(error.message);
      })
  }

  bgColor() {
    return {
      'bgred': this.data.color == "#e75f5f",
      'bgwhite': this.data.color == '#ffffff' || this.data.color == null,
      'bggreen': this.data.color == '#65e665',
      'bgyellow': this.data.color == '#e7da65',
      'bgpink': this.data.color == '#ee6ce3',
      'bgpurple': this.data.color == '#be7aeb',
      'bgorange': this.data.color == '#e28011',
      'bggray': this.data.color == '#c3c0c086',
      'bgblue': this.data.color == '#5eadee'
    }
  }
}

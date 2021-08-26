import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { ActivatedRoute } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit 
  {
    noteForm!: FormGroup;
    response: any;
    token: any;
  
    constructor(private formBuilder: FormBuilder,private http: HttpClient, private note: NotesServicesService,private activeRoute: ActivatedRoute) { }
  
    ngOnInit(): void
    {
      this.noteForm = this.formBuilder.group({
        title: ['', [Validators.maxLength(200), Validators.minLength(1)]],
        body: ['', [Validators.maxLength(400)]]
      });
    }
  
    close()
    {
      if (this.noteForm.value.title != "" && this.noteForm.value.body != "")
      {
        let data = {
          Title: this.noteForm.get('title')?.value,
          WrittenNote: this.noteForm.get('body')?.value,
          Color: "blue",
          IsArchive: false,
          IsPin: false,
          IsBin: false,
        }
  
        console.log(" add note data ", data);
        this.note.createNote(this.token,data).subscribe(
          response =>
          {
            console.log(response);
          })
      }
    }
  }
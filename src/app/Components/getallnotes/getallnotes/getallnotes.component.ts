import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  
  token: any;
  noteArray: any = []
  constructor( private noteservices : NotesServicesService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
}

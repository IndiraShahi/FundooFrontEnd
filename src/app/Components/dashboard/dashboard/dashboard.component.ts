import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LabelComponent } from '../../label/label/label.component';
import { LabelservicesService } from 'src/app/Services/Labelservices/labelservices.service';
import { DataServicesService } from 'src/app/Services/data-services.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements  OnDestroy, OnInit{

  hide: Boolean = false;
  advancedUser: Boolean = true;
  hideNoteBar: Boolean = false;
  labels:any;

  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 10 }, (_, i) => ``);

  fillerContent = Array.from({ length: 10 }, () =>
    "");

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private routers: Router,
    private labeldialog: MatDialog, private label: LabelservicesService, private data: DataServicesService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.GetAllLabel();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  search(data: any)
  {
    console.log(data)
    this.data.sendMessage(data);
  }
  GetAllLabel() {
    this.label.GetAllLabel('Notes/GetLabel').subscribe((response: any) => {
      this.labels=response.data;
    console.log(this.label)
      })
  }

  refresh() {
    window.location.reload();
  }  
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.routers.navigateByUrl('login');
  }
  changeHide() {
    this.hide = !this.hide;
  }
  openDialog(labels: any) {
    let diaLogRef = this.labeldialog.open(LabelComponent, {
      data: labels,
  
    });
    console.log(labels);
    diaLogRef.afterClosed().subscribe()
  }

}
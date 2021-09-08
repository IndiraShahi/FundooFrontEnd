import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes/getallnotes.component';
import { CreatenoteComponent } from './Components/createnote/createnote/createnote.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { AuthguardservicesService } from './authguardservices.service';
import { GetTrashComponent } from './Components/get-trash/get-trash/get-trash.component';
import { GetarchiveComponent } from './Components/getarchive/getarchive/getarchive.component';
import { DeletenotesComponent } from './Components/delete/deletenotes/deletenotes.component';
import { ReminderComponent } from './Components/Reminder/reminder/reminder.component';
import { IconsComponent } from './Components/icons/icons/icons.component';
import { DialogueContentComponent } from './Components/dialogue-content/dialogue-content/dialogue-content.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexFillStyleBuilder, FlexLayoutModule } from '@angular/flex-layout';
import { LabelComponent } from './Components/label/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    GetallnotesComponent,
    CreatenoteComponent,
    NotesComponent,
    GetTrashComponent,
    GetarchiveComponent,
    DeletenotesComponent,
    ReminderComponent,
    IconsComponent,
    DialogueContentComponent,
    LabelComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,  
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    FlexLayoutModule
    
  ],
  providers: [  { provide: MAT_DIALOG_DATA, useValue: {} },
    AuthguardservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

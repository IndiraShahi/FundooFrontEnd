import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { AuthguardGuard } from './authguard.guard';
import { AuthguardservicesService } from './authguardservices.service';
import { GetarchiveComponent } from './Components/getarchive/getarchive/getarchive.component';
import { GetTrashComponent } from './Components/get-trash/get-trash/get-trash.component';
import { ReminderComponent } from './Components/Reminder/reminder/reminder.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes/getallnotes.component';
import { CreatenoteComponent } from './Components/createnote/createnote/createnote.component';
const routes: Routes = [

{ path: 'register', component: RegisterComponent },
{ path: 'forgetpassword', component: ForgetpasswordComponent },
{ path: 'resetpassword/:token', component: ResetpasswordComponent },
{ path: '', redirectTo: "login", pathMatch: "full" },
{ path: 'login', component: LoginComponent },
//{ path: 'allnotes', component: NotesComponent },
{
  path: 'dashboard', component: DashboardComponent,  
  children: [

    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes', component: GetallnotesComponent },
    { path: 'Reminder', component: ReminderComponent},
    { path: 'Archive', component: GetarchiveComponent },
      { path: 'Trash', component: GetTrashComponent }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { ReminderComponent } from './Components/Reminder/reminder/reminder.component';
import { AuthguardGuard } from './authguard.guard';
import { AuthguardservicesService } from './authguardservices.service';
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
    { path: 'notes', component: NotesComponent },
    { path: 'Reminder', component: ReminderComponent },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
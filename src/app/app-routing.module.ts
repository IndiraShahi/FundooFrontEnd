import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { ReminderComponent } from './Components/Reminder/reminder/reminder.component';
const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'forgetpassword', component: ForgetpasswordComponent },
{ path: 'resetpassword/:token', component: ResetpasswordComponent },

{ path: 'allnotes', component: NotesComponent },
{
  path: 'dashboard', component: DashboardComponent,
  children: [

    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes', component: NotesComponent },
    { path: 'Reminder', component: ReminderComponent },
  ]
},
{ path: '', redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
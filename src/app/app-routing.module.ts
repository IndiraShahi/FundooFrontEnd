import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'forgetpassword', component: ForgetpasswordComponent },
{ path: 'dashboard', component: DashboardComponent},
{ path: 'resetpassword/:token', component: ResetpasswordComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
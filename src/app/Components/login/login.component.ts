import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators,} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  MatSnackBarConfig,
MatSnackBarHorizontalPosition,
MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { UserservicesService } from 'src/app/Services/Userservices/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  public isActive: boolean;
  loginForm:FormGroup;
  submitted: boolean = false;
  
 
 
  constructor(private formBuilder:FormBuilder,private Userservice:UserservicesService,
    public snackBar: MatSnackBar, private route: Router) { 
    this.loginForm = this.formBuilder.group(
      {
        Email: new FormControl('', [Validators.required, Validators.email]),
        Password:  new FormControl('', [Validators.required ]
        ),}
    );   
    this.isActive = true;
  } 
  ngOnInit(): void {
  }
  TogglePassword(){
    this.isActive = this.isActive ? false : true 
  }
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  }

  login() {

    
    if(this.loginForm.valid){
      this.openSnackBar('Login in...', 0);
      let reqData ={
        Email: this.loginForm.get('Email')?.value,
        Password: this.loginForm.get('Password')?.value
      }
      
      this.Userservice.loginUser(reqData).subscribe(
        (response: any) => {
          console.log(response.token)
          localStorage.setItem('FunDooJwt', response['token']);
          this.openSnackBar('Login success', 2000);
          this.route.navigate(['dashboard']);
        },
        (error:any) => {
          try {
            if(error['status'] == 0){
              this.openSnackBar('Login failed: server offline', 2000,);
            }
            else{
              this.openSnackBar('Login failed: '+error['error']['message'], 2000,);
            }
            } catch (error) {

          }
        });
    } 
  }
}
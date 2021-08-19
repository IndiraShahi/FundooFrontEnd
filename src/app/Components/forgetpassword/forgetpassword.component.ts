import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
  
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  public Email: string = '@gmail.com';
  ForgetForm:FormGroup

  constructor(private formBuilder:FormBuilder, public snackBar: MatSnackBar ) {
    this.ForgetForm = this.formBuilder.group(
      {
        Email: ['', Validators.required]
      }
    );   
  } 

  ngOnInit(): void {
  }
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  }
  forget() {
    
    if(this.ForgetForm.valid){
      this.openSnackBar('processing', 0); 
      let reqData ={
        Email: this.ForgetForm.get('Email')?.value+this.Email,
      }
    }
        (error:any) => {
          if(error['status'] == 0){
            this.openSnackBar('Sending password reset link failed: server offline', 2000,);
          }
          else{
            this.openSnackBar('Sending password reset link failed: '+error['error']['message'], 2000);
          }
        };
    } 
  }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/Services/Userservices/userservices.service';
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  // variable - default false
  show: boolean = false;


  constructor(private formBuilder: FormBuilder, private user: UserservicesService,public snackBar:MatSnackBar) { }

  // click event function toggle
  password() {
    this.show = !this.show;
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    })
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
       // stop here if form is invalid

    if(this.registerForm.invalid){
      return;
    }
    let requestData = {
      FirstName: this.registerForm.value.firstName,
      LastName: this.registerForm.value.lastName,
      Email: this.registerForm.value.email,
      Password: this.registerForm.value.password
    }
  
    //user object calling registeruser
    this.user.registerUser(requestData).subscribe(response => {console.log(response);
      this.snackBar.open("Registration successfull....."," ",{duration : 2000});   
    },error => {
      console.log("error in register",error);  
      this.snackBar.open("Registration fail....."," ",{duration : 2000});   
    });
  }
   // display form values on success
  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
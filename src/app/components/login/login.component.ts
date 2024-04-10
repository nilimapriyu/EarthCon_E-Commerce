import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';

import validateForm from 'src/app/helpers/validateform';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash";
  loginForm!: FormGroup; //declare login form

  constructor(
    private fb: FormBuilder , //Inject form builder
    private auth:AuthService , 
    private router:Router,
   // private toast:NgToastService
    
    
    
    ){}

  ngOnInit():void   // initialize the form and group them
  {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  hideShowPass()
  {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onLogin()
{
  if(this.loginForm.valid)
  {
    console.log(this.loginForm.value);
    
    console.log(this.loginForm.value);
    //send the object to database
    this.auth.login(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res.message)
        this.loginForm.reset();
        //this.auth.storeToken(res.token);
        //this.toast.success({detail:"SUCCESS", summary:res.message , duration:2000})
        alert(res.message)
        this.router.navigate(['dashboard'])
      },
      error:(err)=>{
       // alert(err?.error.message)
          alert("Something Went Wrong!!")
          console.log(err);
        //this.toast.error({detail:"ERROR", summary:"Something Went Wrong!", duration:2000})
      },
    });

  }
  else
  {
    
    //throw the error using toaster and with required fields
    validateForm.validateAllFormField(this.loginForm);
    alert("Your form is invalid..")
  }
}


}



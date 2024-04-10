import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash";
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder ,
     private auth:AuthService, 
     private router:Router,
    // private toast:NgToastService
     ){}

  ngOnInit():void
  {
    this.signUpForm = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',Validators.required],
      userName : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
  hideShowPass()
  {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSignup()
{
  if(this.signUpForm.valid)
  {
    console.log(this.signUpForm.value);
    //perform logic for signUp
    this.auth.signUp(this.signUpForm.value).subscribe({
      next:(res=>{
        alert(res.message);
        this.signUpForm.reset();
        //this.toast.success({detail:"SUCCESS", summary:res.message , duration:2000})
        this.router.navigate(['login'])
      }),
      error:(err=>{
       // alert(err?.error.message)
       //this.toast.error({detail:"ERROR", summary:"Something Went Wrong!", duration:2000})
       alert("Something Went Wrong!!")
          console.log(err);
      })
    })
    

  }
  else
  {
    
    //logic for throwing error

    
    validateForm.validateAllFormFeild(this.signUpForm);
  
  }
}


}


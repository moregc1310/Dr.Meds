import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { passwordValidator } from './customvalidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,OnDestroy{
 signUpForm!:FormGroup ;
 isGetOtp:boolean=false;
 OtpCounter:number=0;
 sub!:Subscription;
 otpGenerated!:number;
 isOtpVerified:boolean=false;
constructor(private fb:FormBuilder,private http:HttpService){ }

  ngOnInit(): void {
    this.initializeForm();

    this.signUpForm.controls['password'].valueChanges.subscribe((el:any)=>{
      this.signUpForm.controls['confirmPassword'].updateValueAndValidity();
    })
  }


  initializeForm(){
    this.signUpForm=this.fb.group({
      "userName":['',[Validators.required]],
      "password":['',[Validators.required]],
      "confirmPassword":['',[passwordValidator]],
      "mobNo":['',[Validators.required,Validators.maxLength(10)]],
      "isMobNoverified":[false]
    })
  }

  signUp(){
    console.log(this.signUpForm.value);
    this.http.postDataToServer("users",this.signUpForm.value).subscribe((el:any)=>{
      
    })
  }

  getOtp(){
    this.isGetOtp=true;
    
    this.otpGenerated= (Math.floor(1000 + Math.random() * 9000))
    console.log(this.otpGenerated);

   this.sub = interval(1000).subscribe((el:any)=>{
    this.OtpCounter = 60 - el;
    if(this.OtpCounter === 0){
      this.sub.unsubscribe();
    }
      console.log(el);
    })
  }

  isIncorrectOtp:boolean=false;
  Verifyotp(otp:any){
    if(this.otpGenerated == otp){
      this.isOtpVerified=true;
      this.isGetOtp=false;
      this.isIncorrectOtp=false;
      this.sub.unsubscribe();
      this.signUpForm.controls["isMobNoverified"].setValue(true);
    }else{
      this.isIncorrectOtp=true;
    }
  }

  get password(){
    return this.signUpForm.controls['password'];
  }

  get conFirmPassword(){
    return this.signUpForm.controls['confirmPassword'];
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

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
constructor(private fb:FormBuilder){ }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm(){
    this.signUpForm=this.fb.group({
      "userName":[''],
      "password":[''],
      "mobNo":[''],
      "isMobNoverified":[false]
    })
  }

  signUp(){
    console.log(this.signUpForm.value);
  }

  getOtp(){
    this.isGetOtp=true;
    
   this.sub = interval(1000).subscribe((el:any)=>{
    this.OtpCounter = 60 - el;
    if(this.OtpCounter === 0){
      this.sub.unsubscribe();
    }
      console.log(el);
    })
  }

  Verifyotp(){
  this.sub.unsubscribe();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm!:FormGroup;
  loginData:any;
  isNewUser:boolean=false;
  constructor(private fb:FormBuilder,private http:HttpService){ }
  ngOnInit(): void {
    this.initialize();
  }

   initialize(){
   this.signInForm = this.fb.group({
    "userName":[],
    "password":[]
   })
  }

  signIn() {

    const httpParams = new HttpParams()
      .set("userName", this.signInForm.controls['userName'].value)
      .set("password", this.signInForm.controls['password'].value);  

    this.http.getDataFromServerByQueryParams("users",httpParams).subscribe((el: any) => {
      if (el && el.length > 0) {
        this.loginData = el;
        this.isNewUser = false;
      } else {
        this.isNewUser = true;
      }
    })

  }

}

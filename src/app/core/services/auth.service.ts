import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetailsFromlocalStorage(){
    let userData:any;
    userData = localStorage.getItem("usersDetails")
   if(userData){
    userData = JSON.parse(userData);
   }
   return userData
  }

}

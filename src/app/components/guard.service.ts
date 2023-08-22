import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  getAuthToken(){
    const token="qwertyuiop"
    return token
  }

  setTokenInLocalStorage(authToken:string){
    localStorage.setItem("token",authToken)
  }

  getTokenFromLocalStorage(){
    const token=localStorage.getItem("token")
    return token;
  }
}

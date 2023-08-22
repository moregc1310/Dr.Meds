import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class GoldGuardGuard implements CanActivate {


  constructor(private guard:GuardService,private router:Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const Token=this.guard.getTokenFromLocalStorage();
      if(Token && Token.length > 0){
        return true ;
      }else{
       alert("please logged in First")
     //  this.router.navigate(['/Dr.Meds-Gold'])
        return false;
      }
    
  }
  
}

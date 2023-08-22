import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  actionName:string="signIn";
  isUserLoggedIn:boolean=false;
  userDetails:any;
//  cartCounter!:Observable<number>
cartCounter:number=0;
@ViewChild('closeBtn')closeBtn!:ElementRef;

  constructor(private auth:AuthService,private shared:SharedService){ }
  ngOnInit(): void {

   this.shared.cartCounterobs.subscribe((el:any)=>{
    this.cartCounter=el;
   })



   let userData=this.auth.getUserDetailsFromlocalStorage();
   if(userData){
    this.isUserLoggedIn=true;
    this.userDetails=userData;
   }
  }

  changeAction(action:string){
    this.actionName=action ;
  }

  getAction(flag:any){
   if(flag){
    this.closeBtn.nativeElement.click();
    this.isUserLoggedIn=true;
    this.userDetails=this.auth.getUserDetailsFromlocalStorage();
   }
  }

}

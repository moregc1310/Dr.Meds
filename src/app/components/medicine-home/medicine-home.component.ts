import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit{
  pincode:string="";
  pinCodeDetails:any="";
  DisplayErrorMessage:boolean=false;
  showDefaultMessage:boolean=true;
  constructor(private http:HttpService){ }
  ngOnInit(): void {
   
  }

  VeryfyPincode(){
    const endpoint="pin-code-details?"+"pincode="+ this.pincode;
    this.http.getDataFromServer(endpoint).subscribe((el:any)=>{
      if(el && el.length >0){ 
      this.pinCodeDetails=el[0]
      this.DisplayErrorMessage=false;
      this.showDefaultMessage=false;
      }else{
        this.DisplayErrorMessage=true;
        this.showDefaultMessage=true;
      }
    })
  }



}

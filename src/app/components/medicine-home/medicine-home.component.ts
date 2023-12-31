import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { TopDealsComponent } from '../top-deals/top-deals.component';

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
  filterData:any;
  searchTerm:string='';

  @ViewChild('Closebtn') Closebtn!:ElementRef;
  @ViewChild(TopDealsComponent)topdeals:TopDealsComponent | undefined ;
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

      this.Closebtn.nativeElement.click()
      }else{
        this.DisplayErrorMessage=true;
        this.showDefaultMessage=true;
      }
    })
  }


  onSearch(){
    this.filterData=this.topdeals?.TopDeals.filter(item=>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }



}

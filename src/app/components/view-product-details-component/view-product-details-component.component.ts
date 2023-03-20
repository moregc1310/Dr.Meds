import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-product-details-component',
  templateUrl: './view-product-details-component.component.html',
  styleUrls: ['./view-product-details-component.component.scss']
})
export class ViewProductDetailsComponentComponent implements OnInit{

  selectedDrudCode:string|null;
  productDetails:any;
  constructor(private route:ActivatedRoute,private http:HttpService) { 
    this.selectedDrudCode = this.route.snapshot.paramMap.get("drugCode");
  }

  ngOnInit(): void {
    this.getProudctDetailsByCategoryId();
  }

  getProudctDetailsByCategoryId(){
    if(this.selectedDrudCode != null){
      const endPoint = "top-deals?drugCode="+this.selectedDrudCode;
      this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
        if(el && el.length > 0){
          this.productDetails = el[0];
          console.log("product-details",this.productDetails);
        }
      },
      error=>{
        console.log(error);
      })
    }
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl:string=environment.baseUrl;
 httpHeaders:HttpHeaders=new HttpHeaders()
                          .set("content-type","application/json")

  constructor(private http:HttpClient) { }

getDataFromServer(endpoint:string){
  const url= this.baseUrl + endpoint ;
  return this.http.get(url,{headers:this.httpHeaders})
}


getDataFromServerByQueryParams(endpoint:string,httpParams:HttpParams){
  const url= this.baseUrl + endpoint ;
  return this.http.get(url,{headers:this.httpHeaders,params:httpParams})
}

postDataToServer(endpoint:string,data:any){
  const url= this.baseUrl + endpoint ;
 return this.http.post(url,data,{headers:this.httpHeaders});
}

}

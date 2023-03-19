import { HttpClient, HttpHeaders } from '@angular/common/http';
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


}

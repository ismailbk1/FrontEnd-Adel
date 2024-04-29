import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  

  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"

  

  public createDirection(data:any):Observable<any>{
    return this.httpClient.post<any>(`${this.api}/addDirection`,data) ;
  }
 
  public deleteDirection(id:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.api}/deleteDirection/${id}`) ;
  }
  public getDirectionById(id :any):Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getDirectionById/${id}`) ;
  }
  public getAllDirection():Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getDirection`) ;
  }

  public updateDirection(id :any,data:any):Observable<any>{
    return this.httpClient.put<any>(`${this.api}/updateDirection/${id}`,data) ;
  }
}
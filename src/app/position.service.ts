import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  

  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"

  

  public createPosition(data:any):Observable<any>{
    return this.httpClient.post<any>(`${this.api}/addPosition`,data) ;
  }
 
  public deletePosition(id:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.api}/deletePosition/${id}`) ;
  }
  public getPositionById(id :any):Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getPositionById/${id}`) ;
  }

  public updatePosition(id :any,data:any):Observable<any>{
    return this.httpClient.put<any>(`${this.api}/updatePosition/${id}`,data) ;
  }

}

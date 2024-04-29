import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"

  public getResidences():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.api}/getResidence`)
  }
  
  



  

  public createResidence(data:any):Observable<any>{
    return this.httpClient.post<any>(`${this.api}/addResidence`,data) ;
  }
 
  public deleteResidence(id:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.api}/deleteResidence/${id}`) ;
  }
  public getResidenceById(id :any):Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getResidenceById/${id}`) ;
  }

  public updateResidence(id :any,data:any):Observable<any>{
    return this.httpClient.put<any>(`${this.api}/updateResidence/${id}`,data) ;
  }

  
}

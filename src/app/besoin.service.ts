import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from './Models/grade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BesoinService {
  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"
   

  public getDemande():Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getDemandes`) ;
  }
  public createBesoin(data:any):Observable<any>{
    return this.httpClient.post<any>(`${this.api}/addBesoin`,data) ;
  }
  public getBesoin():Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getBesoins`) ;
  }
  public deleteBesoin(id:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.api}/deleteBesoin/${id}`) ;
  }
  public getBesoinById(id :any):Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getBesoinById/${id}`) ;
  }

  public updateBesoin(id :any,data:any):Observable<any>{
    return this.httpClient.put<any>(`${this.api}/updateBesoin/${id}`,data) ;
  }
}

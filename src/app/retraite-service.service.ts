import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetraiteServiceService {

  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"

  public addRetraite(retarite:any):Observable<any>{
    return this.httpClient.post<any>(`${this.api}/retraites`,retarite)
  }
  public getrRtraitesListe():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.api}/retraites`);
  }
  public deleteRetraite(id:number){
    return this.httpClient.delete(`${this.api}/retraites/${id}`);
  }

  public getRetraiteDetails(id:string):Observable<any>{
    return this.httpClient.get(`${this.api}/retraites/${id}`);

  }
  public updaateRetraite(id:number,retarite:any):Observable<any>{
    return this.httpClient.put(`${this.api}/retraites/${id}`,retarite);

  }
}

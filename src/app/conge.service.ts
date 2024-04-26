import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"

  public addConge(conge:any):Observable<any>{
    return this.httpClient.post<any>(`${this.api}/conges`,conge)
  }

  public getCongeListe():Observable<any>{
    return this.httpClient.get(`${this.api}/conges`)
  }
  public deleteConge(id:number):Observable<any>{
    return this.httpClient.delete(`${this.api}/conges/${id}`);
  }
}

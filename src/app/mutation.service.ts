import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './agent/agent.module';

@Injectable({
  providedIn: 'root'
})
export class MutationService {
    constructor(private httpClient:HttpClient){}
    api="http://localhost:8080/api"
    
     public saveMutation(mutation:any):Observable<Agent>{
      return this.httpClient.post<any>(`${this.api}/mutations` ,mutation)
     }
     public getMutationList():Observable<any[]>{
      return this.httpClient.get<any[]>(`${this.api}/mutations`);
    }
    public deleteMutation(id:number){
      return this.httpClient.delete(`${this.api}/mutations/${id}`);
    }
    public mutationById(id:number){
      return this.httpClient.get(`${this.api}/mutations/${id}`);
    }
    public updateMutation(id:number,mutation:any):Observable<any>{
      return this.httpClient.put(`${this.api}/mutations/${id}`,mutation);
  
    }
}

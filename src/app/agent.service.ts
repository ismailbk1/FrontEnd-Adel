import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from './agent/agent.module';
import { Observable } from 'rxjs';
import { Grade } from './Models/grade';
import { Position } from './Models/position';
import { Residence } from './Models/residence';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
 constructor(private httpClient:HttpClient){}
 api="http://localhost:8080/api"
 
  public saveAgent(agent:Agent):Observable<Agent>{
   return this.httpClient.post<Agent>(`${this.api}/addAgent` ,agent)
  }
  public getagent():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.api}/getAgents`)
  }
  public deleteAgent(id_agent: number){
    return this.httpClient.delete(`${this.api}/deleteAgent/${id_agent}`)
  }
  public getAgent(id_agent:number){
    return this.httpClient.get<Agent>('${this.api}/get/agents/${id_agent}') ; 
  }
  public updateAgent(agent:any,id:any){
    return this.httpClient.put<any>(`${this.api}/updateAgent/${id}` ,agent) ;
  }
  public getGrade():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.api}/getGrades`) ;
  }
  public getPosition():Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getPosition`) ;
  }
  public getResidence():Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getResidence`) ;
  
  }
  public getAgentById(id:any):Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getAgentById/${id}`) ;}
}


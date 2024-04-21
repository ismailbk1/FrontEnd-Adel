import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from './agent/agent.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
 constructor(private httpClient:HttpClient){}
 api="http://localhost:8080"
 
  public saveAgent(agent:Agent):Observable<Agent>{
   return this.httpClient.post<Agent>(`${this.api}/agents/addAgent` ,agent)
  }
  public getagent():Observable<Agent[]>{
    return this.httpClient.get<Agent[]>('${this.api}/get/agents/')
  }
  public deleteAgent(id_agent: number){
    return this.httpClient.delete('${this.api}/deleteAgent/${id_agent}')
  }
  public getAgent(id_agent:number){
    return this.httpClient.get<Agent>('${this.api}/get/agents/${id_agent}') ; 
  }
  public updateAgent(agent:Agent){
    return this.httpClient.put<Agent>('${this.api}/update/agents' ,agent) ;
  }
}

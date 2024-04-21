import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { AgentService } from "./agent.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Agent } from "./agent/agent.module";

export const AgentResolver:ResolveFn<any> =
(route: ActivatedRouteSnapshot,
    state : RouterStateSnapshot , 
    agentservice: AgentService = inject(AgentService)) : Observable<Agent> => {

        const id_agent = route.paramMap.get("id_agent");

        if(id_agent){
            return agentservice.getAgent(Number(id_agent)); 
        } else{
            const  agent: Agent ={
                id_agent: 0,
                matricule_agent: 0,
                nomprenom: '',
                sexe: '',
                situation_familiale:'',
                situation_administrative:'',
                date_entree_en_activite:'' ,
                date_naissance: '',
                date_debut_position: '',
                code_grade: 0,
                code_residence: 0,
                code_position: 0
            }
        return  of (agent) ; 
        
    }
    }

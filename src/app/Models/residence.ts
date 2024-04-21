import { Agent } from "../agent/agent.module";

export interface Residence {
    
     idresidence:number ;
    code_residence :number;


    
     agents :Agent[];

    //résidence avec direction
    
     direction:any[];

    
   besoins :any[];

    // residence avec demande

    demandes:any[];

    bureaux:any[];
}

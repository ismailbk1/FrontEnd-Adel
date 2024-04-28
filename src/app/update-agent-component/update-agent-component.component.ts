import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../Models/residence';
import { AgentService } from '../agent.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Grade } from '../Models/grade';
import { Position } from '../Models/position';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../residence.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { Agent } from '../agent/agent.module';

@Component({
  selector: 'app-update-agent-component',
  templateUrl: './update-agent-component.component.html',
  styleUrl: './update-agent-component.component.css'
})
export class UpdateAgentComponentComponent implements OnInit {
  agentId!: number;
   agent: any={};
  grade!:any[]
  position!:any[];
   residence!:any[];
   matricule_agent!: string;
  nomprenom!: string;
  sexe!: string;
  idposition!: any;
  codeResidence!: any;
  code_grade!: any;
  situation_familiale!: string;
  date_naissance!: Date;
  situation_administrative!: string;
  date_entree_en_activite!: string;
  date_debut_position!: string;

  constructor( private agentService:AgentService,private residenceService: ResidenceService,private agentservice:AgentService, private route:ActivatedRoute,private router :Router
) {
   
   
  }
  ngOnInit(): void {





 // Récupérer l'ID de l'URL
 this.route.params.subscribe(params => {
  this.agentId = params['id'];
  console.log('Agent ID:', this.agentId);
  // Maintenant, vous pouvez utiliser this.agentId comme vous le souhaitez dans votre composant
});

this.agentService.getAgentById(this.agentId).subscribe(
  { next: (res: any) => {
    //console.log("222");
    this.agent=res;
   console.log(this.agent)
    
  },
  error: (err: HttpErrorResponse) => {
    console.log(err);
  }
}
)






    this.agentservice.getGrade().subscribe(
      { next: (res: Grade[]) => {
       this.grade=res;
     //  console.log(res);
    
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;
    ////////////
    this.agentservice.getPosition().subscribe(
      { next: (res: Position[]) => {
      
       this.position=res;
       //console.log("111");
     //  console.log(this.position);
    
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;
    ////////////
    this.agentservice.getResidence().subscribe(
      { next: (res: Residence[]) => {
        //console.log("222");
       this.residence=res;
       console.log(this.residence)
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;

  }
 
    
    updateAgent(){
  
   
  
  
   
   

    let agentData: any = {
      
     
        matricule_agent: this.matricule_agent !== undefined ? this.matricule_agent : this.agent.matriculeAgent,
        nomprenom: this.nomprenom !== undefined ? this.nomprenom : this.agent.nomprenom,
        sexe: this.sexe !== undefined ? this.sexe : this.agent.sexe,
        date_naissance: this.date_naissance !== undefined ? this.date_naissance : this.agent.date_naissance,
        situation_familiale: this.situation_familiale !== undefined ? this.situation_familiale : this.agent.situation_familiale,
        situation_administrative: this.situation_administrative !== undefined ? this.situation_administrative : this.agent.situation_administrative,
        date_entree_en_activite: this.date_entree_en_activite !== undefined ? this.date_entree_en_activite : this.agent.date_entree_en_activite,
        date_debut_position: this.date_debut_position !== undefined ? this.date_debut_position : this.agent.date_debut_position,
        grade: this.code_grade !== undefined ? this.code_grade : this.agent.grade,
        position: this.idposition !== undefined ? this.idposition : this.agent.position,
        residence: this.codeResidence !== undefined ? this.codeResidence : this.agent.residence
     

    };
    console.log(agentData);
    this.agentService.updateAgent(agentData,this.agentId).subscribe(


      { next: (res: any) => {
       console.log(res)
       this.router.navigate(['/listeagent']);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }


    );

    }
}

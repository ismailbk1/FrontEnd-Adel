import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Agent } from '../agent/agent.module';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-liste-agent',
  templateUrl: './liste-agent.component.html',
  styleUrl: './liste-agent.component.css'
})
export class ListeAgentComponent implements OnInit {
  dataSource:Agent[]=[] ;
  displayedColumns: string[] = ['id_agent', 'matricule_agent', 'nomprenom', 'sexe' , 'situation_familiale' ,'date_naissance','situation_administrative' , 'date_entree_en_activite'  ,'date_debut_position' , 'code_grade' , 'code_residence' , 'code_position' , 'edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router
  ){
this.getAgentListe();
  }
  ngOnInit(): void {
    
  }
  updateAgent(id_agent:number) : void{
    this.router.navigate(['/agent', {id_agent: id_agent}]);
  }

  deleteAgent(id_agent:number): void{
    console.log(id_agent) ; 
    this.agentservice.deleteAgent(id_agent).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getAgentListe();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );

  }

  getAgentListe(): void {
    this.agentservice.getagent().subscribe(
      {
        next: (res: Agent[]) => {
      this.dataSource=res ; 
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }
  

}

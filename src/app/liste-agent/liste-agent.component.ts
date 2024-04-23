import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Agent } from '../agent/agent.module';
import { Route, Router } from '@angular/router';
import { Residence } from '../Models/residence';
import { Position } from '../Models/position';
import { Grade } from '../Models/grade';

@Component({
  selector: 'app-liste-agent',
  templateUrl: './liste-agent.component.html',
  styleUrl: './liste-agent.component.css'
})
export class ListeAgentComponent implements OnInit {
  agentToUpdateId!:number;
  grade!:any[];
  residence!:Residence[];
  position!:Position[];
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['id_agent', 'matricule_agent', 'nomprenom', 'sexe' , 'situation_familiale' ,'date_naissance','situation_administrative' , 'date_entree_en_activite'  ,'date_debut_position' , 'code_grade' , 'code_residence' , 'code_position' , 'edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router
  ){

  }
  ngOnInit(): void {
    this.getAgentListe();
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
  
  updateAgent(id:number) : void{
    this.agentToUpdateId = id;
    this.router.navigateByUrl(`/update-agent/${id}`);
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
        next: (res: any[]) => {
          console.log(res);
      this.dataSource=res ; 
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }
  
  submitUpdate(){}
}

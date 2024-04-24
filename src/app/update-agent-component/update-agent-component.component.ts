import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  retraiteForm: FormGroup;
   agent!: Agent[];
  grade!:any[]
  position!:any[];
   residence!:any[];

  constructor(private formBuilder: FormBuilder, private retraiteService: RetraiteServiceService  
    ,private agentService:AgentService
  ,
private residenceService: ResidenceService,
private agentservice:AgentService,
) {
   
    this.retraiteForm = this.formBuilder.group({
      agent: ['', Validators.required],
      codeResidence: ['', Validators.required],
      typeRetraite: ['', Validators.required],
      dateDemande: ['', Validators.required],
      dateDepartPreversible: ['', Validators.required],
      motif: ['', Validators.required],
      status: ['Accepter'] // Par défaut
    });
  }
  ngOnInit(): void {
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

 

  onSubmit() {
    console.log("inside add new retarite demand");
    
    console.log(this.retraiteForm.value);
    
     this.retraiteService.addRetraite(this.retraiteForm.value)
        .subscribe(
          response => {

            console.log('Demande de retraite enregistrée avec succès !');
            // Réinitialiser le formulaire après la sauvegarde
            this.retraiteForm.reset();
          },
          error => {
            console.error('Erreur lors de la sauvegarde de la demande de retraite :', error);
          }
        );
    } 
    
    updateAgent(){}
}

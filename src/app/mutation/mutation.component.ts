import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { ResidenceService } from '../residence.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { MutationService } from '../mutation.service';

@Component({
  selector: 'app-mutation',
  templateUrl: './mutation.component.html',
  styleUrl: './mutation.component.css'
})
export class MutationComponent implements OnInit{
  retraiteForm: FormGroup;
   agent: any[]=[];
   residence:any;

  constructor(private formBuilder: FormBuilder, private retraiteService: RetraiteServiceService  
    ,private agentService:AgentService,private mutationService:MutationService
  ,
private residenceService: ResidenceService) {
   
    this.retraiteForm = this.formBuilder.group({
      agent: ['', Validators.required],
      codeResidenceactuel: ['', Validators.required],
      codeResidencemuter: ['', Validators.required],
      typeRetraite: ['', Validators.required],
      dateDemande: ['', Validators.required],
      dateDepartPreversible: ['', Validators.required],
      motif: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getAgent();
    this.getResedence();
  }

  getAgent(){
    this.agentService.getagent().subscribe(
      (response)=>{
       console.log(response);
       this.agent = response;
       
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }
  getResedence(){
    this.residenceService.getResidences().subscribe(
      (response)=>{
       console.log(response);
       this.residence = response;
       
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  onSubmit() {
    console.log("inside add new retarite demand");
    
    console.log(this.retraiteForm.value);
    
     this.mutationService.saveMutation(this.retraiteForm.value)
        .subscribe(
          response => {

            console.log('Demande de Mutation enregistrée avec succès !');
            // Réinitialiser le formulaire après la sauvegarde
            this.retraiteForm.reset();
          },
          error => {
            console.error('Erreur lors de la sauvegarde de la demande de Mutation :', error);
          }
        );
    } 
    
  
}
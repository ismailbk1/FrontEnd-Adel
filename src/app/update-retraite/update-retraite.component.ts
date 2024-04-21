import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { ResidenceService } from '../residence.service';
import { RetraiteServiceService } from '../retraite-service.service';

@Component({
  selector: 'app-update-retraite',
  templateUrl: './update-retraite.component.html',
  styleUrl: './update-retraite.component.css'
})
export class UpdateRetraiteComponent implements OnInit{
  retraiteForm: FormGroup;
   agent: any[]=[];

   residence:any;

  constructor(private formBuilder: FormBuilder, private retraiteService: RetraiteServiceService  
    ,private agentService:AgentService
  ,
private residenceService: ResidenceService) {
   
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
    
  
}

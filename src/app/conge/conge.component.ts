import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { ResidenceService } from '../residence.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { CongeService } from '../conge.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrl: './conge.component.css'
})
export class CongeComponent implements OnInit{
  congeForm: FormGroup;
   agent: any[]=[];

   residence:any;

  constructor(private formBuilder: FormBuilder, private congeService: CongeService  
    ,private agentService:AgentService
  ,
private residenceService: ResidenceService) {
   
    this.congeForm = this.formBuilder.group({
      agent: ['', Validators.required],
      type: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      nb_jour: ['', Validators.required],
      code_conge: ['', Validators.required],
      
    });
  }
  ngOnInit(): void {
    this.getAgent();
  
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
  

  onSubmit() {
    console.log("inside add new Conge demand");
    
    console.log(this.congeForm.value);
    
     this.congeService.addConge(this.congeForm.value)
        .subscribe(
          response => {

            console.log('Demande de Conge enregistrée avec succès !');
            // Réinitialiser le formulaire après la sauvegarde
            this.congeForm.reset();
          },
          error => {
            console.error('Erreur lors de la sauvegarde de la demande de Conge :', error);
          }
        );
    } 
    
}

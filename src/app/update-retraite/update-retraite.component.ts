import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { ResidenceService } from '../residence.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../Models/residence';
import { BesoinService } from '../besoin.service';

@Component({
  selector: 'app-update-retraite',
  templateUrl: './update-retraite.component.html',
  styleUrl: './update-retraite.component.css'
})
export class UpdateRetraiteComponent implements OnInit {
  retraiteForm: FormGroup;
  retraiteId: any;
  agent: any[]=[];
  selectedAgent: any;
  motif:any;
  residence:any;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private retraiteService: RetraiteServiceService,
    private agentService:AgentService,
    private residenceService: ResidenceService
  ) { 
 // Initialiser le formulaire et pré-remplir les données de la retraite à mettre à jour
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
    // Récupérer l'ID de la retraite depuis les paramètres de la route
    this.route.params.subscribe(params => {
      this.retraiteId = params['id'];
    });

   
    
    // Récupérer les données de la retraite à mettre à jour et pré-remplir le formulaire
    this.getRetraiteDetails();
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
    
     this.retraiteService.updaateRetraite(this.retraiteId,this.retraiteForm.value)
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

  // Méthode pour récupérer les détails de la retraite à mettre à jour
  private getRetraiteDetails(): void {
    this.retraiteService.getRetraiteDetails(this.retraiteId).subscribe(response => {
      console.log(response);
      this.retraiteForm.patchValue({
        motif: response.motif_depart,
        typeRetraite: response.type_retraite,
        agent: response.agent.matriculeAgent,
        codeResidence: response.agent.residence.codeResidence,
        status: response.status,
        dateDemande:response.date_demande,
        dateDepartPreversible:response.date_depart_persivible


      });
    


          
    }, error => {
      console.error('Erreur lors de la récupération des détails de la retraite : ', error);
    });
  }
}
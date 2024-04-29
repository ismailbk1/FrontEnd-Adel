import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { MutationService } from '../mutation.service';
import { ResidenceService } from '../residence.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-mutation',
  templateUrl: './update-mutation.component.html',
  styleUrl: './update-mutation.component.css'
})
export class UpdateMutationComponent implements OnInit{
  retraiteForm: FormGroup;
   agent: any[]=[];
   mutationid:any;
   residence:any;

  constructor(private formBuilder: FormBuilder, private retraiteService: RetraiteServiceService  
    ,private agentService:AgentService,private mutationService:MutationService
  ,private route:ActivatedRoute,
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
        // Récupérer l'ID de la retraite depuis les paramètres de la route
        this.route.params.subscribe(params => {
          this.mutationid = params['id'];
        });
    
       
        
        // Récupérer les données de la retraite à mettre à jour et pré-remplir le formulaire
        this.getMutation();
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
    
     this.mutationService.updateMutation(this.mutationid,this.retraiteForm.value)
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
    
    private getMutation(): void {
      this.mutationService.mutationById(this.mutationid).subscribe((res:any) => {
        console.log(res);
    
        this.retraiteForm.patchValue(
          {
          agent: res.agent.matriculeAgent,
          codeResidenceactuel: res.agent.residence.codeResidence,
          codeResidencemuter: res.residence_muter,
          motif: res.motif_depart,
          dateDemande:res.date_demande,
          dateDepartPreversible:res.date_depart_persivible
  
  
        }
      );
  
  
            
      }, error => {
        console.error('Erreur lors de la récupération des détails de la mutation : ', error);
      });
    }
}

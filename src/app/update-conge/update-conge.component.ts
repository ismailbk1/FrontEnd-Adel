import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../agent.service';
import { ResidenceService } from '../residence.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { CongeService } from '../conge.service';

@Component({
  selector: 'app-update-conge',
  templateUrl: './update-conge.component.html',
  styleUrl: './update-conge.component.css'
})
export class UpdateCongeComponent implements OnInit{
  congeForm: FormGroup;
   agent: any[]=[];
   congeCode:any;
   residence:any;

  constructor(private formBuilder: FormBuilder, private congeService: CongeService  
    ,private agentService:AgentService
  ,    private route: ActivatedRoute,

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
    this.route.params.subscribe(params => {
      this.congeCode = params['id'];
    });
    console.log(this.congeCode);
    
    this.getAgent();
    this.getConge(this.congeCode);
  
  }
  getConge(codeConge:number){
    this.congeService.getConge(codeConge).subscribe(
      (res)=>{
console.log(res);
this.congeForm.patchValue({
  code_conge: res.codeConge,
  type: res.type,
  agent: res.agent.matriculeAgent,
  date_debut: res.date_debut,
  date_fin: res.date_fin,
  nb_jour:res.nb_jour,


});

      },(err)=>{

      }
    )
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
    
     this.congeService.updateConge(this.congeCode,this.congeForm.value)
        .subscribe(
          response => {

            console.log(' Update Demande de Conge enregistrée avec succès !');
            // Réinitialiser le formulaire après la sauvegarde
            this.congeForm.reset();
          },
          error => {
            console.error('Erreur lors de la Update de la demande de Conge :', error);
          }
        );
    } 
    
}
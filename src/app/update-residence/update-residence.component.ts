import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BesoinService } from '../besoin.service';
import { GradeServiceService } from '../grade-service.service';
import { PositionService } from '../position.service';
import { DirectionService } from '../direction.service';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrl: './update-residence.component.css'
})
export class UpdateResidenceComponent implements OnInit {
  residenceId!: number;
  libelle:any;
  position :any;
  codeDirection:any;
   nb_besoin_par_residence!:number;
   id_demande! :number;
 direction!:any[];
 
   residence!:any;

  codeResidence!: any;
 

  constructor(private residenceService:ResidenceService, private route:ActivatedRoute,private router :Router
,private directionService:DirectionService,private gradeService :GradeServiceService
  ) {
   
   
  }
  ngOnInit(): void {

    this.directionService.getAllDirection().subscribe({
      next:(res:any)=>{
        this.direction=res;

      }
    });



 // Récupérer l'ID de l'URL
 this.route.params.subscribe(params => {
  this.residenceId = params['id'];
   // Maintenant, vous pouvez utiliser this.agentId comme vous le souhaitez dans votre composant
});
this.residenceService.getResidenceById(this.residenceId).subscribe({
  next: (res: any) => {
    //console.log("222");
    this.residence=res;
   console.log(this.residence)
    
  },
  error: (err: HttpErrorResponse) => {
    console.log(err);
  }
});


  }
 
    
    updateResidence(){
  let ressidenceData: any = {
    codeDirection:this.codeDirection,
    libelle:this.libelle
    
       

    }
    console.log(ressidenceData);
    this.residenceService.updateResidence(this.residenceId,ressidenceData).subscribe(
      {
        next:(res :any)=>{
          console.log(res);
          this.router.navigate(['/listeresidence']);
        },
        error:(err: HttpErrorResponse)=>{
          console.log(err);

        }
      }
    )

    }
}


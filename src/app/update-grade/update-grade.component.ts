import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../Models/residence';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { GradeServiceService } from '../grade-service.service';

@Component({
  selector: 'app-update-grade',
  templateUrl: './update-grade.component.html',
  styleUrl: './update-grade.component.css'
})
export class UpdateGradeComponent  implements OnInit {
  gradeId!: number;
  libelle:any;
   grade :any;
   nb_besoin_par_residence!:number;
   id_demande! :number;
 
 
   residence!:any[];

  codeResidence!: any;
 

  constructor(private agentservice:AgentService, private route:ActivatedRoute,private router :Router
,private besoinService:BesoinService,private gradeService :GradeServiceService
  ) {
   
   
  }
  ngOnInit(): void {





 // Récupérer l'ID de l'URL
 this.route.params.subscribe(params => {
  this.gradeId = params['id'];
   // Maintenant, vous pouvez utiliser this.agentId comme vous le souhaitez dans votre composant
});
this.gradeService.getGradeById(this.gradeId).subscribe({
  next: (res: any) => {
    //console.log("222");
    this.grade=res;
   console.log(this.grade)
    
  },
  error: (err: HttpErrorResponse) => {
    console.log(err);
  }
});


  }
 
    
    updateGrade(){
  let gradeData: any = {
    libelle:this.libelle
    
       

    }
    console.log(gradeData);
    this.gradeService.updateGrade(this.gradeId,gradeData).subscribe(
      {
        next:(res :any)=>{
          console.log(res);
          this.router.navigate(['/listegrade']);
        },
        error:(err: HttpErrorResponse)=>{
          console.log(err);

        }
      }
    )

    }
}

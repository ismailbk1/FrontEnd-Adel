import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { GradeServiceService } from '../grade-service.service';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-update-position',
  templateUrl: './update-position.component.html',
  styleUrl: './update-position.component.css'
})
export class UpdatePositionComponent implements OnInit {
  positionId!: number;
  libelle:any;
  position :any;
   nb_besoin_par_residence!:number;
   id_demande! :number;
 
 
   residence!:any[];

  codeResidence!: any;
 

  constructor(private positionService:PositionService, private route:ActivatedRoute,private router :Router
,private besoinService:BesoinService,private gradeService :GradeServiceService
  ) {
   
   
  }
  ngOnInit(): void {





 // Récupérer l'ID de l'URL
 this.route.params.subscribe(params => {
  this.positionId = params['id'];
   // Maintenant, vous pouvez utiliser this.agentId comme vous le souhaitez dans votre composant
});
this.positionService.getPositionById(this.positionId).subscribe({
  next: (res: any) => {
    //console.log("222");
    this.position=res;
   console.log(this.position)
    
  },
  error: (err: HttpErrorResponse) => {
    console.log(err);
  }
});


  }
 
    
    updatePosition(){
  let positionData: any = {
    libelle:this.libelle
    
       

    }
    console.log(positionData);
    this.positionService.updatePosition(this.positionId,positionData).subscribe(
      {
        next:(res :any)=>{
          console.log(res);
          this.router.navigate(['/listeposition']);
        },
        error:(err: HttpErrorResponse)=>{
          console.log(err);

        }
      }
    )

    }
}


import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../Models/grade';
import { Position } from '../Models/position';
import { Residence } from '../Models/residence';
import { AgentService } from '../agent.service';
import { ResidenceService } from '../residence.service';
import { BesoinService } from '../besoin.service';

@Component({
  selector: 'app-update-besoin',
  templateUrl: './update-besoin.component.html',
  styleUrl: './update-besoin.component.css'
})
export class UpdateBesoinComponent  implements OnInit {
  besoinId!: number;
  
   besoin :any;
   nb_besoin_par_residence!:number;
   id_demande! :number;
 
 
   residence!:any[];

  codeResidence!: any;
 

  constructor(private agentservice:AgentService, private route:ActivatedRoute,private router :Router
,private besoinService:BesoinService
  ) {
   
   
  }
  ngOnInit(): void {





 // Récupérer l'ID de l'URL
 this.route.params.subscribe(params => {
  this.besoinId = params['id'];
   // Maintenant, vous pouvez utiliser this.agentId comme vous le souhaitez dans votre composant
});
this.besoinService.getBesoinById(this.besoinId).subscribe({
  next: (res: any) => {
    //console.log("222");
    this.besoin=res;
   console.log(this.besoin)
    
  },
  error: (err: HttpErrorResponse) => {
    console.log(err);
  }
});

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
 
    
    updateBesoin(){
  let besoinData: any = {
    id_demande:this.id_demande,

    nb_besoin_par_residence:this.nb_besoin_par_residence,
    
    residence:this.codeResidence
    
    
       

    }
    console.log(besoinData);
    this.besoinService.updateBesoin(this.besoinId,besoinData).subscribe(
      {
        next:(res :any)=>{
          console.log(res);
          this.router.navigate(['/listebesoin']);
        },
        error:(err: HttpErrorResponse)=>{
          console.log(err);

        }
      }
    )

    }
}

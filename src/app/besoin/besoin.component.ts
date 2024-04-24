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
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrl: './besoin.component.css'
})
export class BesoinComponent implements OnInit {
  nb_besoin_par_residence!:string;

  demandeInput!:number;
   residence!:any[];
   codeResidence!:any;
   idposition!:any;
   demande!:any;


  constructor( private agentService:AgentService,private agentservice:AgentService, private route:ActivatedRoute,private router :Router,private besoinService :BesoinService
) {
   
   
  }
  ngOnInit(): void {

this.besoinService.getDemande().subscribe(
  
  { next: (res: any) => {
    console.log(this.demande);
   this.demande=res;
   console.log(this.demande);
    
  },
  error: (err: HttpErrorResponse) => {
    console.log(err);
  }
}



);







   
    ////////////
    this.agentservice.getResidence().subscribe(
      { next: (res: any) => {
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
  createBesoin(){
   let  DataBesoin:any={
    nb_besoin_par_residence:this.nb_besoin_par_residence,
    residence:this.codeResidence,
    id_demande:this.demandeInput
    }
console.log(DataBesoin);
this.besoinService.createBesoin(DataBesoin).subscribe(
{
  next:(res :any)=>{
    console.log(res);
    this.router.navigate(['/listebesoin']);
  },
  error:()=>{}
}

);
  }
    
}


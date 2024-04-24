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
  selector: 'app-listebesoin',
  templateUrl: './listebesoin.component.html',
  styleUrl: './listebesoin.component.css'
})
export class ListebesoinComponent  implements OnInit {
  besoin:any;
  agentToUpdateId!:number;
  grade!:any[];
  residence!:Residence[];
  position!:Position[];
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['idbesoin', 'nb_besoin_par_residence', 'residence', 'id_demande' , 'edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router,private besoinService :BesoinService
  ){

  }
  ngOnInit(): void {
    this.getAgentListe();
    this.agentservice.getGrade().subscribe(
      { next: (res: Grade[]) => {
       this.grade=res;
     //  console.log(res);
    
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;
    ////////////
    this.agentservice.getPosition().subscribe(
      { next: (res: Position[]) => {
      
       this.position=res;
       //console.log("111");
     //  console.log(this.position);
    
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    
    }

    ) ;
    ////////////
    this.agentservice.getResidence().subscribe(
      { next: (res: any[]) => {
        //console.log("222");
       this.residence=res;
       console.log(this.residence)
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;
this.besoinService.getBesoin().subscribe(
{next:(res:any)=>{
  console.log(res)
  this.besoin=res;

},

error:(err: HttpErrorResponse)=>{
  console.log(err);
}
}

);
  }
  
  updateBesoin(id:number) : void{
    this.agentToUpdateId = id;
    this.router.navigateByUrl(`/update-besoin/${id}`);
  }

  deleteBesoin(id_besoin:number): void{
 this.besoinService.deleteBesoin(id_besoin).subscribe(
{
  next:(res:any)=>{
    window.location.reload();
  },
  error:(err: HttpErrorResponse)=>{
    console.log(err);

  }
}

 );
 
 

  }

  getAgentListe(): void {
    this.agentservice.getagent().subscribe(
      {
        next: (res: any[]) => {
          console.log(res);
      this.dataSource=res ; 
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }
  
  submitUpdate(){}
}


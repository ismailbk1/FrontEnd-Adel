import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { PositionService } from '../position.service';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-liste-residence',
  templateUrl: './liste-residence.component.html',
  styleUrl: './liste-residence.component.css'
})
export class ListeResidenceComponent implements OnInit {
  besoin:any;
  agentToUpdateId!:number;
  residence!:any[];
  
  
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['codeResidence', 'libelle',  'codeDirection','edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router,private residenceService :ResidenceService,private positionService :PositionService
  ){

  }
  ngOnInit(): void {
   
    this.agentservice.getResidence().subscribe(
      { next: (res: any) => {
       this.residence=res;
   
       console.log(this.residence);
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;
   
  

  }
  
  updateResidence(id:number) : void{
    this.agentToUpdateId = id;
    this.router.navigateByUrl(`/update-residence/${id}`);
  }

  deleteResidence(id_besoin:number): void{
 this.residenceService.deleteResidence(id_besoin).subscribe(
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

 
  
  submitUpdate(){}
}


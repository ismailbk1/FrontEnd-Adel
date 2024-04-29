import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from '../Models/position';
import { Residence } from '../Models/residence';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { GradeServiceService } from '../grade-service.service';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-liste-position',
  templateUrl: './liste-position.component.html',
  styleUrl: './liste-position.component.css'
})
export class ListePositionComponent implements OnInit {
  besoin:any;
  agentToUpdateId!:number;
  position!:any[];
  
  
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['codePosition', 'libelle',  'edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router,private besoinService :BesoinService,private positionService :PositionService
  ){

  }
  ngOnInit(): void {
   
    this.agentservice.getPosition().subscribe(
      { next: (res: any) => {
       this.position=res;
   
       console.log(this.position);
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;
   
  

  }
  
  updatePosition(id:number) : void{
    this.agentToUpdateId = id;
    this.router.navigateByUrl(`/update-position/${id}`);
  }

  deletePosition(id_besoin:number): void{
 this.positionService.deletePosition(id_besoin).subscribe(
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

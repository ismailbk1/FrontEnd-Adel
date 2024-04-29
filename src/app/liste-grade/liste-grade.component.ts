import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from '../Models/grade';
import { Position } from '../Models/position';
import { Residence } from '../Models/residence';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { GradeServiceService } from '../grade-service.service';

@Component({
  selector: 'app-liste-grade',
  templateUrl: './liste-grade.component.html',
  styleUrl: './liste-grade.component.css'
})
export class ListeGradeComponent implements OnInit {
  besoin:any;
  agentToUpdateId!:number;
  grade!:any[];
  residence!:Residence[];
  position!:Position[];
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['codeGrade', 'libelle',  'edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router,private besoinService :BesoinService,private gradeServise :GradeServiceService
  ){

  }
  ngOnInit(): void {
   
    this.agentservice.getGrade().subscribe(
      { next: (res: any) => {
       this.grade=res;
     //  console.log(res);
    
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    }

    ) ;
  

  }
  
  updateGrade(id:number) : void{
    this.agentToUpdateId = id;
    this.router.navigateByUrl(`/update-grade/${id}`);
  }

  deleteGrade(id_besoin:number): void{
 this.gradeServise.deleteGrade(id_besoin).subscribe(
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


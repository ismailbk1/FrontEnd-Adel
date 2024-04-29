import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { GradeServiceService } from '../grade-service.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.css'
})
export class GradeComponent  implements OnInit {
  codeGrade!:any;
  libelle!:any;
  demandeInput!:number;
   residence!:any[];
   codeResidence!:any;
   idposition!:any;
   demande!:any;


  constructor(private router :Router,private gradeService :GradeServiceService
) {
   
   
  }
  ngOnInit(): void {








   

  }
  createGrade(){

   let  DataBesoin:any={
    codeGrade:this.codeGrade,
    libelle:this.libelle
    }
console.log(DataBesoin);
this.gradeService.createGrade(DataBesoin).subscribe(
{
  next:(res :any)=>{
    console.log(res);
    this.router.navigate(['/listeposition']);
  },
  error:()=>{}
}

);
  }
    
}



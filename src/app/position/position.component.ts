import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GradeServiceService } from '../grade-service.service';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrl: './position.component.css'
})
export class PositionComponent  implements OnInit {
  codePosition!:any;
  libelle!:any;
 
   idposition!:any;
  


  constructor(private router :Router,private positionService :PositionService
) {
   
   
  }
  ngOnInit(): void {








   

  }
  createGrade(){

   let  DataPosition:any={
    codePosition:this.codePosition,
    libelle:this.libelle
    }
console.log(DataPosition);
this.positionService.createPosition(DataPosition).subscribe(
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
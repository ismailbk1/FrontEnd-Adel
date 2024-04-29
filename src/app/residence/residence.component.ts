import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionService } from '../position.service';
import { DirectionService } from '../direction.service';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrl: './residence.component.css'
})
export class ResidenceComponent implements OnInit {
  codeResidence!:any;
  codeDirection:any;
  libelle!:any;
 direction!:any;
   idposition!:any;
  


  constructor(private router :Router,private directionService:DirectionService,private residenceService:ResidenceService
) {
   
   
  }
  ngOnInit(): void {
    this.directionService.getAllDirection().subscribe({
      next:(res:any)=>{
        this.direction=res;

      }
    })








   

  }
  createResidence(){

   let  DataResidence:any={
    direction:this.codeDirection,
    codeResidence:this.codeResidence,
    libelle:this.libelle
    }
console.log(DataResidence);
this.residenceService.createResidence(DataResidence).subscribe(
{
  next:(res :any)=>{
    console.log(res);
    this.router.navigate(['/listeresidence']);
  },
  error:()=>{}
}

);
  }
    
}

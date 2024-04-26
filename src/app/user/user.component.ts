import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  fullname!:string;
  email!:string;
  password!:string;
  role!:string;

  demandeInput!:number;
   residence!:any[];
   codeResidence!:any;
   idposition!:any;
   demande!:any;


  constructor(  private route:ActivatedRoute,private router :Router,private userService :UserService
) {
   
   
  }
  ngOnInit(): void {








   

  }

  createUser(){
   let  DataUser:any={
    fullname:this.fullname,
    email:this.email,
    password:this.password,
    role:this.role
    }
console.log(DataUser);
this.userService.createUser(DataUser).subscribe(
{
  next:(res :any)=>{
    console.log(res);
    this.router.navigate(['/listeuser']);
  },
  error:()=>{}
}

);
  }
    
}

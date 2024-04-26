import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from '../Models/grade';
import { Position } from '../Models/position';
import { Residence } from '../Models/residence';
import { AgentService } from '../agent.service';
import { BesoinService } from '../besoin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrl: './listeuser.component.css'
})
export class ListeuserComponent implements OnInit {
  user:any;
  agentToUpdateId!:number;
  grade!:any[];
  residence!:Residence[];
  position!:Position[];
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['iduser', 'fullname', 'email', 'password' ,'role', 'edit', 'delete'];
 
  constructor(private userService:UserService , 
              private router:Router,private besoinService :BesoinService
  ){

  }
  ngOnInit(): void {
   
    this.getUserList();
  
   

  }
  
  updateUser(id:number) : void{
    this.agentToUpdateId = id;
    this.router.navigateByUrl(`/update-besoin/${id}`);
  }

  deleteUser(id_user:number): void{
 this.besoinService.deleteBesoin(id_user).subscribe(
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

  getUserList(): void {
    this.userService.getUser().subscribe(
      {
        next: (res: any[]) => {
          console.log(res);
      this.dataSource=res ;
      this.user=res; 
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }
  
  submitUpdate(){}
}

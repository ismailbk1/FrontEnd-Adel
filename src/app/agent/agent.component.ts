import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { Agent } from './agent.module';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent implements OnInit  {
  isCreateAgent : boolean =true ; 
   agent: any;
   
  constructor(private agentservice:AgentService ,
             private router:Router , 
             private activitedRouter:ActivatedRoute){

  }
  ngOnInit(): void {
    this.agent=this.activitedRouter.snapshot.data['agent'] ; 
    console.log(this.agent) ;
    if(this.agent && this.agent.id_agentW > 0) {
      this.isCreateAgent= false ;
    } else{
      this.isCreateAgent=true ; 
    }
  }
  saveAgent(agentForm:NgForm):void{
    console.log("this is my data ");
    console.log(agentForm.value);
    if (this.isCreateAgent){
  this.agentservice.saveAgent(this.agent).subscribe(
    { next: (res: Agent) => {
       console.log(res);
       agentForm.reset();
       this.router.navigate(["/listeagent"])
     },
     error: (err: HttpErrorResponse) => {
       console.log(err);
     }
   }
     );
}else {
  this.agentservice.updateAgent(this.agent).subscribe(
    {
      next : (res:Agent) =>{
        this.router.navigate(["/listeagent"])
      }, 
      error:(err: HttpErrorResponse) => {
        console.log(err);
      }
    }
  );
}


    
}
}



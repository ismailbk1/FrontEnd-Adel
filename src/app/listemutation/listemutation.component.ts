import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { MutationService } from '../mutation.service';

@Component({
  selector: 'app-listemutation',
  templateUrl: './listemutation.component.html',
  styleUrl: './listemutation.component.css'
})
export class ListemutationComponent implements OnInit{
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['iddemande', 'date_demande', 'date_depart_persivible' , 'matricule_agent' ,'nomprenom', 'residence_muter','edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router,
              private mustationService:MutationService,
              private retraiteService:RetraiteServiceService
  ){
this.getMutationList();
  }
  ngOnInit(): void {
    
  }
  updateAgent(id_agent:number) : void{
    this.router.navigate(['/agent', {id_agent: id_agent}]);
  }

  deleteMutation(id:number): void{
    console.log(id) ; 
    this.mustationService.deleteMutation(id).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getMutationList();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );

  }
  getMutationList(): void {
    this.mustationService.getMutationList().subscribe(
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

  updateMutation(id:number){
    console.log(id);
    
    this.router.navigateByUrl(`/updateMutation/${id}`);

  }

}
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { RetraiteServiceService } from '../retraite-service.service';
import { CongeService } from '../conge.service';

@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrl: './list-conge.component.css'
})
export class ListCongeComponent implements OnInit{
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['code_conge', 'date_debut','date_fin','nb_jour' ,'type', 'matricule_agent' ,'nomprenom', 'edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router,
              private congeService:CongeService
  ){
  }
  ngOnInit(): void {
    this.getCongeListe();

  }
  updateAgent(id_agent:number) : void{
    this.router.navigate(['/agent', {id_agent: id_agent}]);
  }


  deleteConge(id_Conge:number) : void{
    console.log(id_Conge) ; 
    this.congeService.deleteConge(id_Conge).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getCongeListe();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }
  
  getCongeListe(): void {
    this.congeService.getCongeListe().subscribe(
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

}

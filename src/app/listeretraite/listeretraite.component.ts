import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RetraiteServiceService } from '../retraite-service.service';

@Component({
  selector: 'app-listeretraite',
  templateUrl: './listeretraite.component.html',
  styleUrl: './listeretraite.component.css'
})
export class ListeretraiteComponent implements OnInit{
  dataSource:any[]=[] ;
  displayedColumns: string[] = ['iddemande', 'status', 'date_demande', 'date_depart_persivible' , 'matricule_agent' ,'nomprenom','code_residence', 'edit', 'delete'];
 
  constructor(private agentservice:AgentService , 
              private router:Router,
              private retraiteService:RetraiteServiceService
  ){
this.getrRtraitesListe();
  }
  ngOnInit(): void {
    
  }
  updateAgent(id_agent:number) : void{
    this.router.navigate(['/agent', {id_agent: id_agent}]);
  }

  deleteAgent(id:number): void{
    console.log(id) ; 
    this.retraiteService.deleteRetraite(id).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getrRtraitesListe();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );

  }
  getrRtraitesListe(): void {
    this.retraiteService.getrRtraitesListe().subscribe(
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

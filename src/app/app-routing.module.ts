import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RetariteComponent } from './retarite/retarite.component';
import { MutationComponent } from './mutation/mutation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeAgentComponent } from './liste-agent/liste-agent.component';
import { AgentComponent } from './agent/agent.component';
import { AgentResolver } from './agent-resolver';
import { ListeretraiteComponent } from './listeretraite/listeretraite.component';
import { ListemutationComponent } from './listemutation/listemutation.component';
import { UserComponent } from './user/user.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { BesoinComponent } from './besoin/besoin.component';
import { ListebesoinComponent } from './listebesoin/listebesoin.component';
import { UpdateAgentComponentComponent } from './update-agent-component/update-agent-component.component';
import { UpdateBesoinComponent } from './update-besoin/update-besoin.component';
import { CongeComponent } from './conge/conge.component';
import { ListCongeComponent } from './list-conge/list-conge.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { PositionComponent } from './position/position.component';
import { ListePositionComponent } from './liste-position/liste-position.component';
import { ListeResidenceComponent } from './liste-residence/liste-residence.component';
import { ListeGradeComponent } from './liste-grade/liste-grade.component';
import { GradeComponent } from './grade/grade.component';
import { UpdateGradeComponent } from './update-grade/update-grade.component';
import { UpdatePositionComponent } from './update-position/update-position.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { ResidenceComponent } from './residence/residence.component';


const routes: Routes = [
  {path:"login" , component:LoginComponent} , 
  {path:"registre" , component:RegistreComponent} , 
  {path:"" , component:NavbarComponent} ,
  {path:"" , component:DashboardComponent},
  {path:"retraite", component:RetariteComponent},  
  
  {path:"listeretraite", component:ListeretraiteComponent}, 
  {path:"mutation", component:MutationComponent},
  {path:"listemutation", component:ListemutationComponent},
  {path:"listeagent", component:ListeAgentComponent},
  {path:"agent" , component:AgentComponent , resolve:{agent:AgentResolver}}, 
  {path:"user", component:UserComponent},
  {path:"listeuser", component: ListeuserComponent} , 
  {path:"besoin", component:BesoinComponent},
  {path:"listebesoin", component:ListebesoinComponent},
  { path: 'update-agent/:id', component:UpdateAgentComponentComponent  , resolve:{agent:AgentResolver}},
  { path: 'update-besoin/:id', component:UpdateBesoinComponent  },
  { path: 'update-user/:id', component:UpdateUserComponent  },
//Conge 
{path:"conge", component:CongeComponent},  
{path:"listconge", component:ListCongeComponent},  
{path:"position",component:PositionComponent},
{path:"listeposition",component:ListePositionComponent},
{path:"residence",component:ResidenceComponent},
{path:"grade",component:GradeComponent},
{path:"listegrade",component:ListeGradeComponent},
{path:"listeresidence",component:ListeResidenceComponent},
{ path: 'update-grade/:id', component:UpdateGradeComponent  },
{ path: 'update-position/:id', component:UpdatePositionComponent  },
{ path: 'update-residence/:id', component:UpdateResidenceComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

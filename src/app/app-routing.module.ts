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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

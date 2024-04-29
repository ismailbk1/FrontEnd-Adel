import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import { RetariteComponent } from './retarite/retarite.component';
import { MutationComponent } from './mutation/mutation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeAgentComponent } from './liste-agent/liste-agent.component';
import {MatBadgeModule} from '@angular/material/badge';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AgentComponent } from './agent/agent.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ListeretraiteComponent } from './listeretraite/listeretraite.component';
import { ListemutationComponent } from './listemutation/listemutation.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { UserComponent } from './user/user.component';
import { ListebesoinComponent } from './listebesoin/listebesoin.component';
import { BesoinComponent } from './besoin/besoin.component';
import { UpdateRetraiteComponent } from './update-retraite/update-retraite.component';
import { UpdateAgentComponentComponent } from './update-agent-component/update-agent-component.component';
import { UpdateBesoinComponent } from './update-besoin/update-besoin.component';
import { CongeComponent } from './conge/conge.component';
import { ListCongeComponent } from './list-conge/list-conge.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCongeComponent } from './update-conge/update-conge.component';
import { ListMutationComponent } from './list-mutation/list-mutation.component';
import { UpdateMutationComponent } from './update-mutation/update-mutation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    RetariteComponent,
    MutationComponent,
    DashboardComponent,
    ListeAgentComponent,
    AgentComponent,
    ListeretraiteComponent,
    ListemutationComponent,
    ListeuserComponent,
    UserComponent,
    ListebesoinComponent,
    BesoinComponent,
    UpdateRetraiteComponent,
    UpdateAgentComponentComponent,
    UpdateBesoinComponent,
    CongeComponent,
    ListCongeComponent,
    UpdateUserComponent,
    UpdateCongeComponent,
    ListMutationComponent,
    UpdateMutationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    MatInputModule , 
    MatBadgeModule ,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

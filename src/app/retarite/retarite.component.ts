import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RetraiteServiceService } from '../retraite-service.service';

@Component({
  selector: 'app-retarite',
  templateUrl: './retarite.component.html',
  styleUrl: './retarite.component.css'
})
export class RetariteComponent {
  retraiteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private retraiteService: RetraiteServiceService) {
    this.retraiteForm = this.formBuilder.group({
      agent: ['', Validators.required],
      codeResidence: ['', Validators.required],
      typeRetraite: ['', Validators.required],
      dateDemande: ['', Validators.required],
      dateDepartPreversible: ['', Validators.required],
      motif: ['', Validators.required],
      status: ['Accepter'] // Par défaut
    });
  }

  onSubmit() {
    console.log("inside add new retarite demand");
    
    console.log(this.retraiteForm.value);
    
    if (this.retraiteForm.valid) {
    /*  this.retraiteService.saveDemandeRetraite(this.retraiteForm.value)
        .subscribe(
          response => {
            console.log('Demande de retraite enregistrée avec succès !');
            // Réinitialiser le formulaire après la sauvegarde
            this.retraiteForm.reset();
          },
          error => {
            console.error('Erreur lors de la sauvegarde de la demande de retraite :', error);
          }
        );
    } else {
      console.error('Veuillez remplir correctement tous les champs du formulaire.');
    }*/
  }
  }
}

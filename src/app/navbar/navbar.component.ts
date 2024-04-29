import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
role:any ;
  constructor(private router:Router){
   // Récupérer l'utilisateur depuis le stockage local
const userString = localStorage.getItem('user');

// Vérifier si l'utilisateur existe dans le stockage local
if (userString) {
  try {
    // Parser la chaîne JSON en objet JavaScript
    const user = JSON.parse(userString);
this.role = user.role;
    // Utiliser l'utilisateur récupéré
    console.log('User from local storage:', user.role);
  } catch (error) {
    console.error('Error parsing user data from local storage:', error);
  }
} else {
  console.log('User not found in local storage.');
}
  }

  logout(): void {
    localStorage.removeItem('user'); // Supprimer l'utilisateur du stockage local
    this.router.navigate(['']); // Naviguer vers la page de connexion
  }
}

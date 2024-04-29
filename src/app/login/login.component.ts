import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
user:any;
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private route:Router ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
    
      this.authService.login(this.loginForm.value).subscribe(
        (res)=>{
console.log(res);
console.log('Form submitted successfully!');
const userString = JSON.stringify(res);
localStorage.setItem('user', userString);
this.route.navigate(['/navbar']);
        },(err=>{
          console.log(err);
          
        })
      )
      // Vous pouvez ajouter ici votre logique pour appeler un service ou effectuer une autre action
    } else {
      console.error('Invalid form, please fill in all required fields.');
    }
  }
}
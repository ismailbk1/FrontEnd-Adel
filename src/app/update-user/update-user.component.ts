import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
  fullname!:string;
  email!:string;
  password!:string;
  role!:string;
  iduser!:string;
  demandeInput!:number;
   residence!:any[];
   codeResidence!:any;
   idposition!:any;
   demande!:any;
   user!:any;


  constructor(  private route:ActivatedRoute,private router :Router,private userService :UserService
) {
   
   
  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.iduser = params['id'];
      console.log(this.iduser);
    });
    
      this.userService.findUserById(this.iduser).subscribe({
        next:(res:any)=>{
          this.user=res;
          console.log(this.user);
        }
      })
  }

  updateUser(id :any){
    let DataUser: any = {
      fullname: this.fullname !== undefined ? this.fullname : this.user.fullname,
      email: this.email !== undefined ? this.email : this.user.email,
      password: this.password !== undefined ? this.password : this.user.password,
      role: this.role !== undefined ? this.role : this.user.role
  };
  
console.log(DataUser);

this.userService.updateUser(DataUser,id).subscribe(
{
  next:(res :any)=>{
    console.log(res);
    this.router.navigate(['/listeuser']);
  },
  error:()=>{}
}

);
  }
}

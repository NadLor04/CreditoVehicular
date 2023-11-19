import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  myForm !: FormGroup;
  user!:User;
  userId!: number;
  username: any;
  email: any;
  password: any;
  usu !: User;
  registro:boolean = false;
  
  constructor( private fb:FormBuilder,
    private userService:UserService,
    private snackBar: MatSnackBar,
    private router:Router) {this.reactiveForm(); }
    

  reactiveForm(){
    this.myForm = this.fb.group({
      id:[''],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      username:['',[Validators.required]],
    })
  }

  saveUser():void{

    const usuario: User = {
      id: 0,
      email: this.myForm.get('email')!.value,
      password: this.myForm.get('password')!.value,
      username: this.myForm.get('username')!.value,
    }
    
    this.userService.addUser(usuario).subscribe({
      next: (data) => {
        this.registro = true;
        this.snackBar.open('El usuario fue registrado con exito!', '', {
          duration: 2000,
                  });
        this.router.navigate(['/login']); 
      },
      error: (err) => {
        console.log(err);
      },
    });
  
}














}

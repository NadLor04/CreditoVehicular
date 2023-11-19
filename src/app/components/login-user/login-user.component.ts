import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/environment.prod';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  public myForm !: FormGroup;
  user !: User;
  idUser:any;
  basePath:string=environment.basePath;

  constructor(
    private fb:FormBuilder, 
    private userService:UserService,
    private snackBar: MatSnackBar,
    private router:Router,
    private route:ActivatedRoute,
    private http : HttpClient,
    ) {

    }

    ngOnInit(): void {
      this.myForm=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      })
  }
  login(){
    this.userService.getUsers()
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.myForm.value.email && a.password === this.myForm.value.password
      });
      if(user){
        this.snackBar.open('Login correcto!', '', {
          duration: 3500,
        });
        this.myForm.reset();
        console.log('id: ', user.id);
        this.router.navigate(['/home/', user.id]);
      }else{
        this.snackBar.open('Error en las credenciales!', '', {
          duration: 3000,
        });
      }
    },err=>{
      alert("Algo esta mal!")
    })
  }












}

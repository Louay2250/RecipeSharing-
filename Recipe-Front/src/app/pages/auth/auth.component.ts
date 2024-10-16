import { Component } from '@angular/core';
import { FormControl ,FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isRegister=false;

  constructor(public authService:AuthServiceService) { }
  
  registerationForm=new FormGroup({
    fullName:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.required,Validators.email]),
    password:new FormControl("", [Validators.required,Validators.minLength(6)])
  });
  loginForm=new FormGroup({
    email:new FormControl("", [Validators.required,Validators.email]),
    password:new FormControl("", [Validators.required,])
  })
  handleRegister(){
    console.log("register ",this.registerationForm.value)

    console.log("login ",this.loginForm.value)
    this.authService.register(this.registerationForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("signup success",response)
      }
    })
  }
  handleLogin(){
    console.log("login ",this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("login success",response)
      }
    })
  }
  togglePanel(){
    this.isRegister=!this.isRegister;
  }
}

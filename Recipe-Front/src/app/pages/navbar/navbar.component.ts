import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user:any=null;
  constructor(public authService:AuthServiceService, private router:Router) { }
  ngOnInit() :void{
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state",auth)
        this.user=auth.user
        
      }
    )
}
   handleLogout(){
      this.authService.logout()
       //this.router.navigate("/")
  }

}

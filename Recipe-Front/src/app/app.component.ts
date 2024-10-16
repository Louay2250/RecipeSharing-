import { Component,OnInit } from '@angular/core';
import { AuthServiceService } from './services/Auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe-Sharing';

  user:any=null;
  constructor(public authService:AuthServiceService) { }
  ngOnInit() :void{
    console.log("ngOnInit")
    this.authService.getUserProfile().subscribe({
      next:data=>console.log("req user",data),
      error:error=>console.log("error",error)
    });
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state",auth)
        this.user=auth.user
      }
    )
}
}

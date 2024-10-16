import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { RecipeServiceService } from 'src/app/services/Recipe/recipe-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  recipes=[];
  trackById(index: number, item: any): number {
    return item.id;
}
constructor(public dialog: MatDialog,public authService:AuthServiceService,private recipeService:RecipeServiceService){ }
handleopenCreateRecipeForm(){
  this.dialog.open(CreateRecipeFormComponent)
}
  ngOnInit(){
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe(
      
    );
    this.recipeService.recipeSubject.subscribe(
      (state)=>{
        this.recipes=state.recipes
      }
    )
  }
}

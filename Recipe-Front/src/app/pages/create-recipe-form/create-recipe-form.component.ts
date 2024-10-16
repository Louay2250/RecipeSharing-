import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/Recipe/recipe-service.service';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.scss']
})
export class CreateRecipeFormComponent {
  recipeItem:any={
    title:"",
    description:"",
    foodType:'',
    image:''

  }
  constructor(private recipeService:RecipeServiceService){

  }

  onSubmit(){
    console.log("values",this.recipeItem);
    this.recipeService.createRecipes(this.recipeItem).subscribe(
      {
        next:data=>console.log("create recipe",data),
        error:error=>console.log("error",error)
      }
    )
  }
}

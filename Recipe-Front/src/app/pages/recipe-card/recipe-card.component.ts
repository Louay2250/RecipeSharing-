import { Component, Input } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { UpdateRecipeFormComponent } from '../update-recipe-form/update-recipe-form.component';
import { RecipeServiceService } from 'src/app/services/Recipe/recipe-service.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipe:any
  @Input() toggle:any
  constructor(public dialog:Dialog ,private recipeService:RecipeServiceService){
  }

  handleOpenEditRecipeForm( ){
  this.dialog.open(UpdateRecipeFormComponent,
    {data :this.recipe })

  }
  ngOnInit(){
    console.log("toggle",this.toggle)
  }
  handleDeleteRecipe(){
    this.recipeService.deleteRecipes(this.recipe.id).subscribe()
  }
}

import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeServiceService } from 'src/app/services/Recipe/recipe-service.service';

@Component({
  selector: 'app-update-recipe-form',
  templateUrl: './update-recipe-form.component.html',
  styleUrls: ['./update-recipe-form.component.scss']
})
export class UpdateRecipeFormComponent {
  recipeItem:any={
    title:'',
    description:'',
    foodType:'',
    image:''

  }
  constructor(@Inject(MAT_DIALOG_DATA) public recipe:any,private recipeService:RecipeServiceService){}

  onSubmit(){
    this.recipeService.updateRecipes(this.recipeItem).subscribe({
      next:data=>console.log("update data",data),
      error:err=>console.log("update error",err)
    });
    console.log("values ---------- ",this.recipeItem);
  }
  ngOnInit(){   this.recipeItem=this.recipe
}
}

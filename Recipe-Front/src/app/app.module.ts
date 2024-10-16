import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RecipeCardComponent } from './pages/recipe-card/recipe-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateRecipeFormComponent } from './pages/create-recipe-form/create-recipe-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateRecipeFormComponent } from './pages/update-recipe-form/update-recipe-form.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthServiceService } from './services/Auth/auth-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeCardComponent,
    HomePageComponent,
    CreateRecipeFormComponent,
    UpdateRecipeFormComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:MAT_DIALOG_DATA , useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';

import { AppRoutingModule }     from './app-routing.module';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NewRecepieComponent } from './new-recepie/new-recepie.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RecipiesComponent,
    RecipeDetailsComponent,
    ProductPageComponent,
    NewRecepieComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

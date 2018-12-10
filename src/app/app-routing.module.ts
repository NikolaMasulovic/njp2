import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent } from './recipies/recipies.component'
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'
import { ProductPageComponent } from './product-page/product-page.component'
import { NewRecepieComponent } from './new-recepie/new-recepie.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'recipies', component: RecipiesComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'newRecipe', component: NewRecepieComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../domain/recipe'
import { Product } from '../domain/product'
import { REC,PRO } from '../mock-heroes'
 
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipies: Recipe[];
  recipe: Recipe;
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.recipies = REC;
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    let rec: Recipe;
    this.recipies.forEach( function(value){
      if(value.id == id){
        rec = value;
      }
    })
    this.recipe = rec;
    this.products = rec.products;
  }

  goBack(): void {
    this.location.back();
  }

}

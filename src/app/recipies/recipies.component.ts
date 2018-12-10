import { Component, OnInit } from '@angular/core';
import { PRO,REC } from '../mock-heroes'
import { Recipe } from '../domain/recipe'
import { Product } from '../domain/product' 

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  recipies: Recipe[];
  constructor() { }

  ngOnInit() {
    this.recipies = REC;

  }
  viewRecipeDetail(): void{
    
  }

}

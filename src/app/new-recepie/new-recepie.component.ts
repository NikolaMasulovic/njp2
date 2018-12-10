import { Component, OnInit } from '@angular/core';
import { Recipe } from '../domain/recipe'
import { Product } from '../domain/product' 
import { PRO } from '../mock-heroes'

@Component({
  selector: 'app-new-recepie',
  templateUrl: './new-recepie.component.html',
  styleUrls: ['./new-recepie.component.css']
})
export class NewRecepieComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = PRO;
  }

}

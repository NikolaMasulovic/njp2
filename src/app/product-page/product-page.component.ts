import { Component, OnInit } from '@angular/core';
import { PRO } from '../mock-heroes'
import { Product } from '../domain/product'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: Product[];
  newPrName: string;

  constructor() { }

  ngOnInit() {
    this.products = PRO;
  }

  add(): void {
    console.log(this.newPrName)
  }

}

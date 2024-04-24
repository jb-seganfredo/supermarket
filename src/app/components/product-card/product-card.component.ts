import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IProduct } from '../../interfaces/product.interface';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() product?: IProduct;
  @Input() teste?: string;
  @Output() addProductsToCart: EventEmitter<void> = new EventEmitter();

  constructor() {
    // console.log(this.product);
    // console.log(this.teste);
  }

  ngOnInit() {
    // console.log(this.product);
    // console.log(this.teste);
  }

  addToShoppingCart() {
    this.addProductsToCart.emit();
    console.log('Product added to cart');
  }
}

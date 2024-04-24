import { Component, EventEmitter, Output } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { IProduct } from '../../interfaces/product.interface';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-products-catalog',
  standalone: true,
  imports: [NgFor, NgIf, ProductCardComponent, MatIconModule, ShoppingCartComponent],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.css'
})
export class ProductsCatalogComponent {
  @Output() addProductsToCart: EventEmitter<IProduct> = new EventEmitter();

  teste: string = 'ABC';
  productsList: IProduct[] = [
    {
      "id": 1,
      "title": "PeanutButter",
      "description": "Delicious peanut paste",
      "price": 19.99,
      "totalInStock": 20,
      "totalAddedToCart": 0,
    },
    {
      "id": 2,
      "title": "Tofu",
      "description": "Soy Thingy",
      "price": 59.99,
      "totalInStock": 20,
      "totalAddedToCart": 0,
    },
    {
      "id": 3,
      "title": "Choice Organic Teas Puerh Tea",
      "description": "Just tea",
      "price": 59.99,
      "totalInStock": 20,
      "totalAddedToCart": 2,

    },
    {
      "id": 4,
      "title": "Organic Almonds",
      "description": "Delicious",
      "price": 39.99,
      "totalInStock": 20,
      "totalAddedToCart": 0,

    },
    
  ]

  warnAboutAddProductToCart(product: IProduct){
    console.log("produto vai ser adicionado");
    console.log(product);

    this.addProductsToCart.emit(product);
  }
}



import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsCatalogComponent } from './pages/products-catalog/products-catalog.component';
import { IProduct } from './interfaces/product.interface';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent, 
    FooterComponent,
    ShoppingCartComponent,
    ProductsCatalogComponent,
    MatSidenavModule,
    MatIconModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'supermarket';
  
  addedProductsList: IProduct[] = []; 

  findOrAddProduct(product: IProduct) {
    for (let i=0; i<this.addedProductsList.length; i++) {
      const currProduct = this.addedProductsList[i];

      if (product.id === currProduct.id) {
        currProduct.totalAddedToCart = (product.totalAddedToCart < product.totalInStock)? currProduct.totalAddedToCart + 1 : currProduct.totalAddedToCart;
        return;
      }
    }

    product.totalAddedToCart = 1;
    this.addedProductsList.push(product);
  }

  addProductsToCart(product: IProduct) {
    console.log("product will be added to cart");

    this.findOrAddProduct(product);
    this.addedProductsList = [...this.addedProductsList]; 

    console.log(this.addedProductsList);
  }
}

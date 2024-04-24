import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [MatDividerModule, MatListModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent implements OnInit, OnChanges {

  @Input("productsList") addedProductsList: IProduct[] = [];

  ngOnInit() {
    console.log(this.addedProductsList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.addedProductsList);
  }


  // localStorage.setItem('addedProductsList', JSON.stringify(this.addedProductsList));
}

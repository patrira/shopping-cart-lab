import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: any;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products$ = this.productService.fetchProducts();
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}

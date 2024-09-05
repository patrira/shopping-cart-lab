import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../../services/cart.service';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<CartItem[] >;
  totalItems!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
    this.totalItems = this.cartService.getTotalItems();
  }

  removeFromCart(productName: string): void {
    this.cartService.removeFromCart(productName);
  }

  updateQuantity(productName: string, newQuantity: number): void {
    this.cartService.updateQuantity(productName, newQuantity);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}

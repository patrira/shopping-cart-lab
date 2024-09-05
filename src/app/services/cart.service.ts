import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: any): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(item => item.name === product.name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({ name: product.name, price: product.price, quantity: 1 });
    }

    this.cartItemsSubject.next([...currentItems]);
  }

  removeFromCart(productName: string): void {
    let currentItems = this.cartItemsSubject.value.filter(item => item.name !== productName);
    this.cartItemsSubject.next(currentItems);
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }

  updateQuantity(productName: string, newQuantity: number): void {
    const currentItems = this.cartItemsSubject.value.map(item => {
      if (item.name === productName && newQuantity > 0) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    this.cartItemsSubject.next([...currentItems]);
  }

  getTotalItems(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + item.quantity, 0);
  }
}

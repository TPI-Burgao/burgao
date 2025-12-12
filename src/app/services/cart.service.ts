import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);
  
  items = computed(() => this.cartItems());
  itemCount = computed(() => 
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );
  total = computed(() => 
    this.cartItems().reduce((total, item) => total + (item.price * item.quantity), 0)
  );

  addItem(product: { id: number; name: string; price: number; image: string }) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      this.cartItems.set(
        currentItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cartItems.set([...currentItems, { ...product, quantity: 1 }]);
    }
  }

  removeItem(productId: number) {
    this.cartItems.set(
      this.cartItems().filter(item => item.id !== productId)
    );
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    this.cartItems.set(
      this.cartItems().map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  incrementQuantity(productId: number) {
    const item = this.cartItems().find(i => i.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity + 1);
    }
  }

  decrementQuantity(productId: number) {
    const item = this.cartItems().find(i => i.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity - 1);
    }
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() cartToggle = new EventEmitter<void>();

  constructor(public cartService: CartService) {}

  onCartClick() {
    this.cartToggle.emit();
  }
}
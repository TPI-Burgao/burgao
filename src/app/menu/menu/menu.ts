import { Component } from '@angular/core';
import { Cart } from '../../cart/cart';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from "@angular/router";
import { Header } from '../../core/header/header';

// Tipos extraídos para melhor organização e reuso
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuItem {
  title: string;
  image: string;
  isNew?: boolean;
  products: Product[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Cart, Header],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  selectedCategory: MenuItem | null = null;
  isCartOpen = false;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.closeProducts();
    });
  }

  menuItems: MenuItem[] = [
    {
      title: 'Novidades',
      image: 'images/products/new.png',
      isNew: true,
      products: [
        {
          id: 1,
          name: 'Burgão Supreme',
          description:
            'Hambúrguer artesanal 200g, queijo cheddar, bacon crocante, alface, tomate e molho especial da casa',
          price: 32.9,
          image: 'images/products/burgao-supreme.png'
        },
        {
          id: 2,
          name: 'Chicken Crispy',
          description:
            'Frango empanado crocante, maionese de alho, alface americana e picles',
          price: 28.9,
          image: 'images/products/chicken-crispy.png'
        }
      ]
    },
    {
      title: 'Burgers',
      image: 'images/products/burger.png',
      products: [
        {
          id: 3,
          name: 'Classic Burger',
          description:
            'Hambúrguer 180g, queijo, alface, tomate, cebola e molho burgão',
          price: 25.9,
          image: 'images/products/classic-burger.png'
        },
        {
          id: 4,
          name: 'Bacon Burger',
          description:
            'Hambúrguer 180g, bacon, queijo cheddar, cebola caramelizada e barbecue',
          price: 29.9,
          image: 'images/products/bacon-burger.png'
        },
        {
          id: 5,
          name: 'Double Smash',
          description:
            'Dois hambúrgueres smash 100g cada, queijo americano, picles e molho especial',
          price: 34.9,
          image: 'images/products/double-smash.png'
        }
      ]
    },
    {
      title: 'Acompanhamentos',
      image: 'images/products/acompanhamento.png',
      products: [
        {
          id: 6,
          name: 'Onion Rings',
          description:
            'Anéis de cebola empanados e crocantes com molho barbecue',
          price: 15.9,
          image: 'images/products/onion-rings.png'
        },
        {
          id: 7,
          name: 'Nuggets',
          description:
            '10 unidades de nuggets de frango com molho à escolha',
          price: 18.9,
          image: 'images/products/nuggets.png'
        },
        {
          id: 8,
          name: 'Batata Frita',
          description:
            'Porção de batata frita crocante e sequinha',
          price: 12.9,
          image: 'images/products/fritas.png'
        }
      ]
    },
    {
      title: 'Bebidas',
      image: 'images/products/bebidas.png',
      products: [
        {
          id: 9,
          name: 'Refrigerante 350ml',
          description: 'Coca-Cola, Guaraná ou Fanta',
          price: 6.9,
          image: 'images/products/refrigerante.png'
        },
        {
          id: 10,
          name: 'Suco Natural 500ml',
          description: 'Laranja, limão ou morango',
          price: 9.9,
          image: 'images/products/suco-natural.png'
        },
        {
          id: 11,
          name: 'Milkshake',
          description: 'Chocolate, morango ou baunilha',
          price: 16.9,
          image: 'images/products/milkshake.png'
        }
      ]
    },
    {
      title: 'Combo em promoção',
      image: 'images/products/combo.png',
      products: [
        {
          id: 12,
          name: 'Combo Burgão',
          description:
            'Burgão Supreme + Fritas Média + Refrigerante 350ml',
          price: 45.9,
          image: 'images/products/combo-burgao.png'
        },
        {
          id: 13,
          name: 'Combo Família',
          description:
            '3 Burgers + 3 Fritas + 3 Bebidas + Onion Rings',
          price: 99.9,
          image: 'images/products/combo-familia.png'
        }
      ]
    }
  ];

  onMenuItemClick(item: MenuItem) {
    this.selectedCategory = item;
  }

  closeProducts() {
    this.selectedCategory = null;
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  addToCart(product: Product) {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  }

  getProductQuantity(productId: number): number {
    const item = this.cartService.items().find(i => i.id === productId);
    return item ? item.quantity : 0;
  }

  incrementProduct(product: Product) {
    this.cartService.incrementQuantity(product.id);
  }

  decrementProduct(product: Product) {
    this.cartService.decrementQuantity(product.id);
  }
}

import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuItem {
  title: string;
  image: string;
  isNew?: boolean;
  products: Product[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  selectedCategory: MenuItem | null = null;
  
  menuItems: MenuItem[] = [
    {
      // ajustar disposição dos cards para ficar uniforme
      title: 'NOVIDADES',
      image: 'images/products/novidade.png',
      isNew: true,
      products: [
        {
          id: 1,
          name: 'Burgão Supreme',
          description: 'Hambúrguer artesanal 200g, queijo cheddar, bacon crocante, alface, tomate e molho especial da casa',
          price: 32.90,
          image: 'images/products/burgao-supreme.png'
        },
        {
          id: 2,
          name: 'Chicken Crispy',
          description: 'Frango empanado crocante, maionese de alho, alface americana e picles',
          price: 28.90,
          image: 'images/products/chicken-crispy.png'
        }
      ]
    },
    {
      title: 'BURGER',
      image: 'images/products/burger.png',
      products: [
        {
          id: 3,
          name: 'Classic Burger',
          description: 'Hambúrguer 180g, queijo, alface, tomate, cebola e molho Burgão',
          price: 25.90,
          image: 'images/products/classic-burger.png'
        },
        {
          id: 4,
          name: 'Bacon Burger',
          description: 'Hambúrguer 180g, bacon, queijo cheddar, cebola caramelizada e barbecue',
          price: 29.90,
          image: 'images/products/bacon-burger.png'
        },
        {
          id: 5,
          name: 'Double Smash',
          description: 'Dois hambúrgueres smash 100g cada, queijo americano e molho especial',
          price: 34.90,
          image: 'images/products/double-smash.png'
        }
      ]
    },
    {
      title: 'ACOMPANHAMENTOS',
      image: 'images/products/acompanhamento.png',
      products: [
        {
          id: 6,
          name: 'Onion Rings',
          description: 'Anéis de cebola empanados e crocantes com molho barbecue',
          price: 15.90,
          image: 'images/products/onion-rings.png'
        },
        {
          id: 7,
          name: 'Nuggets',
          description: '10 unidades de nuggets de frango com molho à escolha',
          price: 18.90,
          image: 'images/products/nuggets.png'
        },
        {
          id: 8,
          name: 'Batata Frita',
          description: 'Porção de batata frita crocante e sequinha com maionese e ketchup',
          price: 12.90,
          image: 'images/products/fritas.png'
        }
      ]
    },
    {
      title: 'BEBIDAS',
      image: 'images/products/bebidas.png',
      products: [
        {
          id: 9,
          name: 'Refrigerante 350ml',
          description: 'Coca-Cola, Sprite ou Fanta',
          price: 6.90,
          image: 'images/products/refrigerante.png'
        },
        {
          id: 10,
          name: 'Suco Natural 500ml',
          description: 'Laranja, limão ou morango',
          price: 9.90,
          image: 'images/products/suco-natural.png'
        },
        {
          id: 11,
          name: 'Milkshake',
          description: 'Chocolate, morango ou baunilha',
          price: 16.90,
          image: 'images/products/milkshake.png'
        }
      ]
    },
    {
      title: 'COMBOS',
      image: 'images/products/combo.png',
      products: [
        {
          id: 12,
          name: 'Combo Burgão',
          description: 'Burgão Supreme + Fritas Média + Refrigerante 350ml',
          price: 45.90,
          image: 'images/products/combo-burgao.png'
        },
        {
          id: 14,
          name: 'Combo Família',
          description: '4 Burgers + 4 Fritas + 4 Refrigerantes + Nuggets',
          price: 99.90,
          image: 'images/products/combo-familia.png'
        }
      ]
    }
  ];

  // adicionar botão de incrementação e decrementação no card de produtos | será exibido após clicar em 'adicionar'

  onMenuItemClick(item: MenuItem) {
    this.selectedCategory = item;
  }

  closeProducts() {
    this.selectedCategory = null;
  }

  addToCart(product: Product) {
    console.log('Adicionado ao carrinho:', product);
    // adicionar a lógica do carrinho
    alert(`${product.name} adicionado ao carrinho!`);
  }
}
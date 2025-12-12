import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto, ProdutoDto } from '../../models/produto';
import { Header } from '../../core/header/header';
import { Cart } from '../../cart/cart';
import { CartService } from '../../services/cart.service';
import { ProdutoService } from '../../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-produtos-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos-admin.html',
  styleUrl: './produtos-admin.css',
})
export class ProdutosAdminPage {
  private produtoService = inject(ProdutoService);
  editando = signal<boolean>(false);
  produto: Produto = this.novoProduto();
 
  produtos = toSignal<Produto[], Produto[]>(
    this.produtoService.listar(), { initialValue: [] }
  )

  habilitarEdicao() {
    this.editando.set(!this.editando());
  }

  visualizarProduto(id: number) {
    this.produtoService.vw(id).subscribe({
      next: (p) => this.produto = p,
      error: (err) => console.error(err)
    });
  }

  adicionarProduto(produto: ProdutoDto): void {
    this.produtoService.add(produto);
  }

  /*removerProduto(produto: Produto): Produto {
    this.produtos() = this.produtos().filter(p => p.id !== produto.id);
    return produto;
  }*/

  /* alterarProduto(produtoNovo: ProdutoDto): void {
    const idx = this.produtos().findIndex(p => p.id === produtoNovo.id);
    if (idx >= 0) this.produtos()[idx] = { ...produtoNovo };
  } */

  onSubmit() {
    /*if (this.editando()) {
      this.produtoService.atualizar(this.produto).subscribe({
        next: () => {
          this.editando.set(false);
          this.produto = this.novoProduto();
        }
      });
    } else {*/
      this.produtoService.add(this.produto).subscribe({
        next: () => {
          this.produto = this.novoProduto();
        }
      });
    /*}*/
  }

  editar(p: Produto) {
    this.habilitarEdicao();
    this.produto = { ...p };
  }

  /*excluir(p: Produto) {
    this.removerProduto(p);
  }*/

  private novoProduto(): Produto {
    return {
      id: 0,
      nome: '',
      URL: '',
      descricao: '',
      preco: 0,
      categoria: '',
      disponivel: true,
      promo: false,
      desconto: 0
    };
  }
}

// src/app/models/produto.ts
export interface Produto {
  id: number;
  nome: string;
  url: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel: boolean;
  promo?: true,
  desconto?: 0
}

export class ProdutoMap{
  static deJson (json: any): Produto {
    return {
      id: json.id,
      nome: json.nome,
      url: json.url,
      descricao: json.descricao,
      preco: json.preco,
      categoria: json.categoria,
      disponivel: json.disponivel,
      promo: json.promo,
      desconto: json.desconto
    }
  }

  static paraJson(p: Produto){
    return {
      id: p.id,
      nome: p.nome,
      url: p.url,
      descricao: p.descricao,
      preco: p.preco,
      categoria: p.categoria,
      disponivel: p.disponivel,
      promo: p.promo || false,
      desconto: p.desconto || 0
    } 
  }
}


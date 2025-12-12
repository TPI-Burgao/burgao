// src/app/models/produto.ts
export interface Produto {
  id: number;
  nome: string;
  URL: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel: boolean;
  promo?: boolean,
  desconto?: number
}

export interface ProdutoDto {
  nome: string;
  URL: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel: boolean;
  promo?: boolean,
  desconto?: number
}

export class ProdutoMap{
  static deJson (json: any): Produto {
    return {
      id: json.id,
      nome: json.nome,
      URL: json.URL,
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
      URL: p.URL,
      descricao: p.descricao,
      preco: p.preco,
      categoria: p.categoria,
      disponivel: p.disponivel,
      promo: p.promo,
      desconto: p.desconto
    } 
  }
}


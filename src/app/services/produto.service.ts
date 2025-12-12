import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Produto, ProdutoDto, ProdutoMap } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private http = inject(HttpClient);
  private urlAPI = "https://burgaoapi-production.up.railway.app/burgaoAPI/produtos";

  listar(): Observable<Produto[]> {
    return this.http.get<any[]>(this.urlAPI).pipe((
      map(lista => lista.map((json) => ProdutoMap.deJson(json)))),
      catchError(err => {
        console.log("Error ocorreu: " + err.message);
        return of([]);
      })
    )
  }

  vw(id: number): Observable<Produto>{
    return this.http.get<any>(this.urlAPI + `/${id}`).pipe(
      map(json => ProdutoMap.deJson(json)),
      catchError(err => {
        console.log("Erro ocorreu ao buscar produto: " + err.message);
        return of();
      })
    )
  }

  add(p: ProdutoDto): Observable<any> {
    const body = {
        "nome": p.nome,
        "URL": p.URL,
        "descricao": p.descricao,
        "preco": p.preco,
        "categoria": p.categoria,
        "disponivel": p.disponivel,
        "promo": p.promo,
        "desconto": p.desconto
    };
    return this.http.post(this.urlAPI, body);
  } 
}

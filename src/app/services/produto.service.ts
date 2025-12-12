import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Produto, ProdutoMap } from '../models/produto';

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
}

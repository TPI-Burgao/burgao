import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private http = inject(HttpClient);
  private urlAPI = "https://burgaoapi-production.up.railway.app/burgaoAPI/produtos";

  listar(): Observable<Produto[]> {
    return this.http.get<any[]>(this.urlAPI).pipe(
      catchError(err => {
        return of([]);
      })
    )
  }
}

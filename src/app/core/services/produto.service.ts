import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProdutoById(id: number): Observable<{mensagem: string}> {
    return this.http.get<{mensagem: string}>(`${this.apiUrl}produtos/${id}`);
  }
}

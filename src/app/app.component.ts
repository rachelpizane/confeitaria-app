import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoService } from './core/services/produto.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: string = 'confeitaria-app';
  produto?: string;
  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.getProduto(1);
  }

  getProduto(id: number) {
    this.produtoService.getProdutoById(id).subscribe({
      next: (data) => {
        console.log('Produto recebido:', data.mensagem);
        this.produto = data.mensagem
      },
      error: (error) => {
        console.error('Erro ao buscar produto:', error);
      },
    });
  }
}

import { Injectable } from '@angular/core';
import { Categoria } from './categoria.enum';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[];
  produtoID: string;
  produto: Produto;

  constructor() {

      this.produtos = [{
        id: '001',
        nome: 'Geladeira',
        valor: 1500,
        marca: 'Brastemp',
        quantidade: 20000,
        tipo: Categoria.ELETRODOMESTICOS,
        garantia: '3 anos'
      },
      {
        id: '002',
        nome: 'iPhone',
        valor: 15000,
        marca: 'Apple',
        quantidade: 2000,
        tipo: Categoria.TECNOLOGIA,
        garantia: '1 ano'
      },
      {
        id: '003',
        nome: 'Batata palha',
        valor: 5,
        marca: 'Elma Chips',
        quantidade: 15000,
        tipo: Categoria.ALIMENTOS,
        garantia: '-'
      },
      {
        id: '004',
        nome: 'Benegripe',
        valor: 3.50,
        marca: 'Benegripe®',
        quantidade: 1400,
        tipo: Categoria.FARMACIA,
        garantia: '-'
      },
      {
        id: '005',
        nome: 'Colchão Queen Size',
        valor: 3000,
        marca: 'Ortobom',
        quantidade: 5000,
        tipo: Categoria.OUTRO,
        garantia: '5 anos'
      },
      {
        id: '006',
        nome: 'Vaso',
        valor: 50,
        marca: 'Vasos®',
        quantidade: 150,
        tipo: Categoria.DECORACAO,
        garantia: '03 meses'
      },
      {
        id: '007',
        nome: 'Creme dental',
        valor: 5,
        marca: 'Oral-B®',
        quantidade: 400000,
        tipo: Categoria.HIGIENE,
        garantia: '-'
      }

    ];
   }

   listarTodos(): Produto[]{
    return this.produtos;
   }

   listarByID(produtoID: string): Produto {
    this.produto = this.produtos.find(dado => this.produtoID === dado.id);
    return this.produto;
   }
}

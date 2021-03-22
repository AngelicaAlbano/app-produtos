import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutosService } from '../model/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentDisplayIndex:number=-1;

  constructor(private ps: ProdutosService) {  }

  getProdutos(): Produto[]{
    return this.ps.listarTodos();
  }

  // hide/show card-content
  hide(index) {
    if(this.currentDisplayIndex==index)
     {
      this.currentDisplayIndex=-1;
      return;
     }
     this.currentDisplayIndex = index;
  }

}

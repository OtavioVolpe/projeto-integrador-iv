import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';


@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  dataSource: Produto[] = [
    {nome: 'Coca-Cola', quantidade: 10},
    {nome: 'Fanta', quantidade: 5},
    {nome: 'Guaraná', quantidade: 8}
  ]
  displayedColumns: string[] = ['nome', 'quantidade', 'acoes'];
}

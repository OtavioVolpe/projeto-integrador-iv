import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  conteudo = false;

  mostrarOcultar() {
    this.conteudo = !this.conteudo;
  }

  listaItens = [
    {id: '001', nome: 'volpe', ativo: true},
    {id: '002', nome: 'biel', ativo: false},
    {id: '003', nome: 'luiz', ativo: true},
    {id: '004', nome: 'elo', ativo: false}
  ];

    tamanhoFonte = 15;

    aumentarFonte() {
      this.tamanhoFonte = this.tamanhoFonte + 1;
    }

    diminuirFonte(){
      this.tamanhoFonte = this.tamanhoFonte - 1;
    }
}

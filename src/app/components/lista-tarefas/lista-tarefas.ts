import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../tarefa-service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  imports: [FormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css'
})

export class ListaTarefas {
  tarefas: Tarefa[] = [];

  constructor(public tarefaService: TarefaService) {
    this.tarefas = this.tarefaService.listar();
  }

  remover(index: number) {
    this.tarefaService.remover(index);
    this.tarefas = this.tarefaService.listar();
  }

  concluir(index: number) {
    this.tarefaService.marcarConcluida(index);
  }
}

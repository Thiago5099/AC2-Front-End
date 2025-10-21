import { Injectable } from '@angular/core';
import { Tarefa } from './models/tarefa';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {
  private tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(nome: string) {
    this.tarefas.push({ nome, concluida: false });
  }

  remover(index: number) {
    this.tarefas.splice(index, 1);
  }

  marcarConcluida(index: number) {
    this.tarefas[index].concluida = true;
  }

  contar(): number {
    return this.tarefas.length;
  }


 /* tarefas: Task[] = [];

  novo: Task = { tarefa: ''};

  concluido: Task = { tarefa: ''};
  add() {
    if (!this.novo.tarefa)
      return;
    this.tarefas.push({ ...this.novo });
    this.novo = { tarefa: ''};
  }
  concluir() {
    if (!this.concluido.tarefa)
      return;
    this.tarefas.push({ ...this.concluido });
    this.concluido = { tarefa: ''};
  }
  remover(i: number) {
    this.tarefas.splice(i, 1);
  }

  */
}

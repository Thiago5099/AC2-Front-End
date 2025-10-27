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
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TarefaService } from '../../tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefas',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './cadastrar-tarefas.html',
  styleUrl: './cadastrar-tarefas.css'
})

export class CadastrarTarefas {
  nomeTarefa = '';

  constructor(private tarefaService: TarefaService) {}

  cadastrar() {
    if (this.nomeTarefa.trim() !== '') {
      this.tarefaService.adicionar(this.nomeTarefa);
      this.nomeTarefa = '';
    }
  }
}

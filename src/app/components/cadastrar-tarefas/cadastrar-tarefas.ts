import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefas',
  imports: [FormsModule],
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

import { Routes } from '@angular/router';
import { CadastrarTarefas } from './components/cadastrar-tarefas/cadastrar-tarefas';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';

export const routes: Routes = [
  { path: 'cadastro', component: CadastrarTarefas },
  { path: 'lista', component: ListaTarefas }
];

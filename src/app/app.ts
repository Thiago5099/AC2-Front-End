import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Tarefa } from './models/tarefa';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('P2');
}

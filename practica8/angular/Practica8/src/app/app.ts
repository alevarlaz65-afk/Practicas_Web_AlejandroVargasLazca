import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from './components/tabla/tabla';
  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Eventos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practica8');
}

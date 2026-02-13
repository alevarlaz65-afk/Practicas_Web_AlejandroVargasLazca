import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contacto } from './contacto/contacto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica06-modal');
}

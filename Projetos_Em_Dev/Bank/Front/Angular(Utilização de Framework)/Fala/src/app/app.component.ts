import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conta } from './Paginas/conta/conta';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Conta],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Fala');
}

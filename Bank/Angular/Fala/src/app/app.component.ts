import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from "./Components/container/container";
import { Barra_inferior} from "./Components/barra_inferior/barra_inferior";
import { Saldo} from "./Components/saldo/saldo";
import {CorpoMedio } from "./Components/corpo-medio/corpo-medio";
import {Quadro} from "./Components/quadro/quadro"
import {Final} from "./Components/final/final"



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Barra_inferior,
     Saldo, CorpoMedio,Quadro,Final],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Fala');
}

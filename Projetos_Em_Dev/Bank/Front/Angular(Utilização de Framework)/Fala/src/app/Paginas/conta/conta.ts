import { Component } from '@angular/core';
import { Container } from "../../Components/container/container";
import { Barra_inferior} from "../../Components/barra_inferior/barra_inferior";
import { Saldo} from "../../Components/Comp-conta/saldo/saldo";
import {CorpoMedio } from "../../Components/Comp-conta/corpo-medio/corpo-medio";
import {Quadro} from "../../Components/Comp-conta/quadro/quadro"


@Component({
  selector: 'app-conta',
  imports: [Container, Barra_inferior,
     Saldo, CorpoMedio,Quadro],
  templateUrl: './conta.html',
  styleUrl: './conta.css',
})
export class Conta {

}

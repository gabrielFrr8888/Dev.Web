import { Component } from '@angular/core';
import { CadComp5 } from '../../../Components/Comp-cad/cad-comp-5/cad-comp-5';
import { Final } from '../../../Components/final/final';
import { CadSetVolt } from '../../../Components/Comp-cad/cad-seta-voltar/cad-seta-voltar';
import { Container } from '../../../Components/container/container';

@Component({
  selector: 'app-cad-5',
  imports: [Container, CadSetVolt, Final, CadComp5],
  templateUrl: './cad-5.html',
  styleUrl: './cad-5.css',
})
export class Cad5 {

}

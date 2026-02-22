import { Component } from '@angular/core';
import { CadSetVolt } from '../../../Components/Comp-cad/cad-seta-voltar/cad-seta-voltar';
import { CadSetAvan } from '../../../Components/Comp-cad/cad-seta_avançar/cad-seta-avan';
import { Container } from '../../../Components/container/container';
import { Final } from '../../../Components/final/final';
import { CadComp4 } from "../../../Components/Comp-cad/cad-comp-4/cad-comp-4";

@Component({
  selector: 'app-cad-4',
  imports: [Container, CadSetAvan, CadSetVolt, Final, CadComp4],
  templateUrl: './cad-4.html',
  styleUrl: './cad-4.css',
})
export class Cad4 {

}

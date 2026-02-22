import { Component } from '@angular/core';
import { Container } from "../../../Components/container/container";
import {Final} from "../../../Components/final/final"
import { CadSetAvan } from '../../../Components/Comp-cad/cad-seta_avançar/cad-seta-avan';
import { CadSetVolt } from '../../../Components/Comp-cad/cad-seta-voltar/cad-seta-voltar';
import { CadComp3 } from '../../../Components/Comp-cad/cad-comp-3/cad-comp-3';


@Component({
  selector: 'app-cad-3',
  imports: [Container, CadComp3,CadSetAvan,CadSetVolt, Final],
  templateUrl: './cad-3.html',
  styleUrl: './cad-3.css',
})
export class Cad3 {

}

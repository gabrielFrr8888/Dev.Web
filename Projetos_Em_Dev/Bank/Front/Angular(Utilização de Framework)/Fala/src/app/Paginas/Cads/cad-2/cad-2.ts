import { Component } from '@angular/core';
import { Container } from "../../../Components/container/container";
import {Final} from "../../../Components/final/final"
import { CadSetAvan } from '../../../Components/Comp-cad/cad-seta_avançar/cad-seta-avan';
import { CadSetVolt } from '../../../Components/Comp-cad/cad-seta-voltar/cad-seta-voltar';
import { CadComp2 } from '../../../Components/Comp-cad/cad-comp-2/cad-comp-2';

@Component({
  selector: 'app-cad-2',
  imports: [Container, CadComp2,CadSetAvan,CadSetVolt, Final],
  templateUrl: './cad-2.html',
  styleUrl: './cad-2.css',
})
export class Cad2 {

}

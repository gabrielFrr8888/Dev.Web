import { Component } from '@angular/core';
import { Container } from "../../../Components/container/container";
import {Final} from "../../../Components/final/final"
import { CadComp } from '../../../Components/Comp-cad/cad-comp/cad-comp';
import { CadSetAvan } from '../../../Components/Comp-cad/cad-seta_avançar/cad-seta-avan';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-cad',
  imports: [Container, CadComp, CadSetAvan, Final, RouterLink],
  templateUrl: './cad.html',
  styleUrl: './cad.css',
})
export class Cad {

}

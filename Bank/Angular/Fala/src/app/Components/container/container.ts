import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-container',
  imports: [NgOptimizedImage],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {
  containerID="cont_t";
  contLogo="Logo";
  ImgLogo='Logo.png';

}


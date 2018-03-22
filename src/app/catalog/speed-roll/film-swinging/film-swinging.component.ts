import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

@Component({
  selector: 'app-film-swinging',
  templateUrl: './film-swinging.component.html',
  styleUrls: ['./film-swinging.component.css']
})
export class FilmSwingingComponent implements OnInit {

  public constructions: Construction[];
  public size: Size[];

  constructor() {}

  ngOnInit() {
    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

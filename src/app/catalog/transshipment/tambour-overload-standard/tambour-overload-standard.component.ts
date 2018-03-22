import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/transshipment/color';
import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';

@Component({
  selector: 'app-tambour-overload-standard',
  templateUrl: './tambour-overload-standard.component.html',
  styleUrls: ['./tambour-overload-standard.component.css']
})
export class TambourOverloadStandardComponent implements OnInit {

  public colors: Color[];
  public colorsWall: Color[];
  public acsessuars: Acsessuar[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => TransshipmentService))
    public transshipmentService: TransshipmentService
  ) {}

  ngOnInit() {
    this.colors = this.transshipmentService.getColor([
      'black',
      'blue',
    ]);
    this.colorsWall = this.transshipmentService.getColorWall([
      'white',
      'blue',
      'gray',
      'red',
    ]);
    this.acsessuars = this.transshipmentService.getAcsessuars([
      'dcwithoutWallsAndRoof',
      'add1',
      'add2',
      'add3',
      'add4',
      'add5',
      'br250',
      'br450',
      'brc510',
      'brm600',
      'brsp1',
      'brsp2',
      'bs500',
      'bs800'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

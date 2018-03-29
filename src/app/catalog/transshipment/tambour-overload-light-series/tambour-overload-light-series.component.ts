import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/transshipment/color';
import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';

@Component({
  selector: 'app-tambour-overload-light-series',
  templateUrl: './tambour-overload-light-series.component.html',
  styleUrls: ['./tambour-overload-light-series.component.css']
})
export class TambourOverloadLightSeriesComponent implements OnInit {

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

import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/transshipment/color';
import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';
@Component({
  selector: 'app-bridge-folding-sliding',
  templateUrl: './bridge-folding-sliding.component.html',
  styleUrls: ['./bridge-folding-sliding.component.css']
})
export class BridgeFoldingSlidingComponent implements OnInit {

  public types: Color[];
  public colors: Color[];
  public acsessuars: Acsessuar[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => TransshipmentService))
    public transshipmentService: TransshipmentService
  ) {}

  ngOnInit() {
    this.types = this.transshipmentService.getType([
      'lenticular',
    ]);
    this.colors = this.transshipmentService.getColor([
      'black',
      'blue',
    ]);
    this.acsessuars = this.transshipmentService.getAcsessuars([
      'wheelGuides',
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

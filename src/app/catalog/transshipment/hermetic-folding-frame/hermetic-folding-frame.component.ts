import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';

@Component({
  selector: 'app-hermetic-folding-frame',
  templateUrl: './hermetic-folding-frame.component.html',
  styleUrls: ['./hermetic-folding-frame.component.css']
})
export class HermeticFoldingFrameComponent implements OnInit {

  public acsessuars: Acsessuar[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => TransshipmentService))
    public transshipmentService: TransshipmentService
  ) {}

  ngOnInit() {
    this.acsessuars = this.transshipmentService.getAcsessuars([
      'movableTopSheet',
      'smallPillow',
      'bigPillow',
      'wheelGuides',
      'fence',
      'pillar',
      'concretingFrame',
      'trafficlightLed',
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

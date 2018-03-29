import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';

@Component({
  selector: 'app-hermetic-inflatable',
  templateUrl: './hermetic-inflatable.component.html',
  styleUrls: ['./hermetic-inflatable.component.css']
})
export class HermeticInflatableComponent implements OnInit {

  public acsessuars: Acsessuar[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => TransshipmentService))
    public transshipmentService: TransshipmentService
  ) {}

  ngOnInit() {
    this.acsessuars = this.transshipmentService.getAcsessuars([
      'elongation',
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

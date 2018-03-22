import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/transshipment/color';
import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';

@Component({
  selector: 'app-platform-telescopic-lip',
  templateUrl: './platform-telescopic-lip.component.html',
  styleUrls: ['./platform-telescopic-lip.component.css']
})
export class PlatformTelescopicLipComponent implements OnInit {

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
      'dcuh1',
      'dcuh2',
      'dcuh3',
      'trafficlightSensor',
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

import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/speed-roll/color';
import { Acsessuar } from '../../../shared/speed-roll/acsessuar';

import { SpeedRollService } from '../../../shared/speed-roll/speed-roll.service';


@Component({
  selector: 'app-clean',
  templateUrl: './clean.component.html',
  styleUrls: ['./clean.component.css']
})
export class CleanComponent implements OnInit {

  public types: Color[];
  public colors: Color[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => SpeedRollService))
    public speedRollService: SpeedRollService
  ) {}

  ngOnInit() {
    this.types = this.speedRollService.getType([
      'typeSteel'
    ]);
    this.colors = this.speedRollService.getColor([
      'white',
      'darckBlue',
      'darckGreen',
      'silver',
      'yellow',
      'lightRed',
      'orange',
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

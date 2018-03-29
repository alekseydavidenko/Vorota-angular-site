import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/speed-roll/color';
import { Acsessuar } from '../../../shared/speed-roll/acsessuar';

import { SpeedRollService } from '../../../shared/speed-roll/speed-roll.service';

@Component({
  selector: 'app-film-veils',
  templateUrl: './film-veils.component.html',
  styleUrls: ['./film-veils.component.css']
})
export class FilmVeilsComponent implements OnInit {

  public colors: Color[];
  public acsessuars: Acsessuar[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => SpeedRollService))
    public speedRollService: SpeedRollService
  ) {}

  ngOnInit() {
    this.colors = this.speedRollService.getColor([
      'blue',
      'green',
      'red',
    ]);
    this.acsessuars = this.speedRollService.getAcsessuars([
      'clampingSteel',
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

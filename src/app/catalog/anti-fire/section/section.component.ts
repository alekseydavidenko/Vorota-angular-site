import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { TypePanel } from '../../../shared/anti-fire/type-panel';
import { ColorPanelRal } from '../../../shared/anti-fire/color-panel-ral';
import { AcsessuarAntiFire } from '../../../shared/anti-fire/acsessuar-anti-fire';

import { AntiFireService } from '../../../shared/anti-fire/anti-fire.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  public typesPanels: TypePanel[];
  public colorsPanelsRal: ColorPanelRal[];
  public acsessuars: AcsessuarAntiFire[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => AntiFireService))
    public antiFireService: AntiFireService
  ) { }

  ngOnInit() {
    this.typesPanels = this.antiFireService.getTypesPanels([
      'stucco'
    ]);
    this.colorsPanelsRal = this.antiFireService.getColorsPanelsRal([
      'whiteStandart',
      'white',
      'brown',
      'blue',
      'green',
      'silver',
      'red',
      'gray',
      'anthracite',
      'ivory',
      'wineRred',
    ]);
    this.acsessuars = this.antiFireService.getAcsessuarsAntiFire([
      'dhre',
      'photoCell',
      'lamp',
      'pult',
      'keySwich',
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }
}

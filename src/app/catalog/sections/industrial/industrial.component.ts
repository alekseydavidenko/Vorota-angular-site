import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewPanel } from '../../../shared/sections/view-panel';
import { TypePanel } from '../../../shared/sections/type-panel';
import { ColorPanelWood } from '../../../shared/sections/color-panel-wood';
import { ColorPanelRal } from '../../../shared/sections/color-panel-ral';
import { AcsessuarSections } from '../../../shared/sections/acsessuar-sections';

import { SectionsService } from '../../../shared/sections/sections.service';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.css']
})
export class IndustrialComponent implements OnInit {

  public viewsPanels: ViewPanel[];
  public typesPanels: TypePanel[];
  public colorsPanelsWood: ColorPanelWood[];
  public colorsPanelsRal: ColorPanelRal[];
  public acsessuars: AcsessuarSections[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => SectionsService))
    public sectionsService: SectionsService
  ) {}

  ngOnInit() {
    this.viewsPanels = this.sectionsService.getViewsPanels([
      'gofr',
      'wave',
      'strip',
      'tLine',
      'smooth',
    ]);
    this.typesPanels = this.sectionsService.getTypesPanels([
      'wood',
      'stucco',
      'smooth',
    ]);
    this.colorsPanelsWood = this.sectionsService.getColorsPanelsWood([
      'darkOak',
      'goldenOak',
      'mahagony',
      'satinGrey',
      'wenge',
    ]);
    this.colorsPanelsRal = this.sectionsService.getColorsPanelsRal([
      'white',
      'brown',
      'blue',
      'green',
      'silver',
      'red',
      'gray',
      'anthracite',
      'black',
      'ral'
    ]);
    this.acsessuars = this.sectionsService.getAcsessuarsSections([
      'valve',
      'lock',
      'windowMinPromBlack',
      'windowMaxPromBlack',
      'wicket'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }
}

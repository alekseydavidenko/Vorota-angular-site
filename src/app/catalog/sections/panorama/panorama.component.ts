import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewPanel } from '../../../shared/sections/view-panel';
import { TypePanel } from '../../../shared/sections/type-panel';
import { ColorPanelRal } from '../../../shared/sections/color-panel-ral';
import { AcsessuarSections } from '../../../shared/sections/acsessuar-sections';

import { SectionsService } from '../../../shared/sections/sections.service';

@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.css']
})
export class PanoramaComponent implements OnInit {

  public viewsPanels: ViewPanel[];
  public typesPanels: TypePanel[];
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
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }
}

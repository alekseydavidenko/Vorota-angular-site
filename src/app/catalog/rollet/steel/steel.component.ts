import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewLamel } from '../../../shared/rollet/view-lamel';
import { ColorLamel } from '../../../shared/rollet/color-lamel';
import { AcsessuarRollet } from '../../../shared/rollet/acsessuar-rollet';

import { RolletService } from '../../../shared/rollet/rollet.service';
@Component({
  selector: 'app-steel',
  templateUrl: './steel.component.html',
  styleUrls: ['./steel.component.css']
})
export class SteelComponent implements OnInit {

  public viewLamels: ViewLamel[];
  public colorLamels: ColorLamel[];
  public colorLamelsAdditional: ColorLamel[];
  public acsessuars: AcsessuarRollet[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => RolletService))
    public rolletService: RolletService
  ) { }

  ngOnInit() {
    this.viewLamels = this.rolletService.getViewsLamels([
      'rhs75',
      'rhs75p',
      'rhs11708',
      'rhs117p08',
    ]);
    this.colorLamels = this.rolletService.getColorLamels([
      'white',
      'brown',
      'blue',
      'green',
      'silver',
      'gray',
      'ivory',
      'wineRed',
      'notColor'
    ]);
    this.colorLamelsAdditional = this.rolletService.getColorLamelsAdditional([
      'whiteMaur',
      'yellowNarcise',
      'ivoryMaur',
      'yellowShfran',
      'grayIvory',
      'redRubin',
      'redLight',
      'blueStil',
      'greenFirTree',
      'grayGraphit',
      'brownRed',
      'brownDarck',
      'blackShadow',
      'anthracite',
    ]);
    this.acsessuars = this.rolletService.getAcsessuarsRollet([
      'swb',
      'swm',
      'cv01',
      'smartRoll',
      'gc',
      'dhre1',
      'transmitter2Pro',
      'transmitter4Pro',
      'transmitter4',
      'transmitterPremium',
      'photosell',
      'lampPro'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

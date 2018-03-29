import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewLamel } from '../../../../shared/rollet/view-lamel';
import { ColorLamel } from '../../../../shared/rollet/color-lamel';
import { AcsessuarRollet } from '../../../../shared/rollet/acsessuar-rollet';

import { RolletService } from '../../../../shared/rollet/rollet.service';

@Component({
  selector: 'app-rhe-56',
  templateUrl: './rhe-56.component.html',
  styleUrls: ['./rhe-56.component.css']
})
export class Rhe56Component implements OnInit {

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
      'rhe56g',
      'rhe56gm'
    ]);
    this.colorLamels = this.rolletService.getColorLamels([
      'white',
      'brown',
      'silver',
      'gray',
      'ivory',
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
      'roll',
      'gc',
      'dhre1',
      'smartcontrol2',
      'gsm2',
      't5',
      'transmitter2Pro',
      'transmitter4Pro',
      'transmitter4',
      'transmitterPremium',
      'photosell',
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

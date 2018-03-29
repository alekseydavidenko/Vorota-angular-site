import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewLamel } from '../../../shared/rollet/view-lamel';
import { ColorLamel } from '../../../shared/rollet/color-lamel';
import { AcsessuarRollet } from '../../../shared/rollet/acsessuar-rollet';

import { RolletService } from '../../../shared/rollet/rollet.service';

@Component({
  selector: 'app-steel-shaft',
  templateUrl: './steel-shaft.component.html',
  styleUrls: ['./steel-shaft.component.css']
})
export class SteelShaftComponent implements OnInit {

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
      'rhs117',
      'rhs117p',
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
      'swm',
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

import { Component, OnInit } from '@angular/core';

import {
  ViewPanel,
  TypePanel,
  ColorPanelWood,
  ColorPanelRal,
  AcsessuarVorot,
  Size,
  Construction
} from '../../../shared/idex';

import {
  ViewsPapels,
  TypesPanels,
  ColorsPanelsWood,
  ColosPanelsRal,
  Acsessuars,
  CharacteristicSize,
  Constructions,
} from './characteristics';


@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  public viewsPanels: ViewPanel[];
  public typesPanels: TypePanel[];
  public colorsPanelsWood: ColorPanelWood[];
  public colorsPanelsRal: ColorPanelRal[];
  public acsessuars: AcsessuarVorot[];
  public constructions: Construction[];
  public size: Size[];

  ngOnInit() {
    this.viewsPanels = ViewsPapels;
    this.typesPanels = TypesPanels;
    this.colorsPanelsWood = ColorsPanelsWood;
    this.colorsPanelsRal = ColosPanelsRal;
    this.acsessuars = Acsessuars;
    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }
}

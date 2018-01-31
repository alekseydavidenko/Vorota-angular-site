import { Component, OnInit } from '@angular/core';
import { CharacteristicSize, Size } from './characteristics';

@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  public size: Size[];

  constructor() { }

  ngOnInit() {
    this.size = CharacteristicSize;
  }

}

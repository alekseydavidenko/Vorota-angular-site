import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина проема, мм', '2 000 - 4 000'),
  new Size('Высота проема, мм', '1 800 - 4 000'),
  new Size('Притолока, мм', 'от 550'),
  new Size('Пристенки, мм', 'от 330')
];

export const Constructions: Construction[] = [
  new Construction('Электрический привод (находится внутри стойки)'),
  new Construction('Вал (находится внутри короба вала)'),
  new Construction('Короб вала'),
  new Construction('Полотно ворот'),
  new Construction('Направляющие для движения полотна'),
  new Construction('Боковые стойки'),
  new Construction('Нижняя кромка полотна'),
  new Construction('Фотоэлементы'),
  new Construction('Блок упpавления (находится внутри стойки)'),
];

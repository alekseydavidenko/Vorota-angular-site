import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина проема, мм', '2 000 - 2 750'),
  new Size('Высота проема, мм', '2 000 - 2 750'),
  new Size('Притолока, мм', 'от 1 100'),
  new Size('Пристенки, мм', 'от 220 - 440')
];

export const Constructions: Construction[] = [
  new Construction('Электрический привод'),
  new Construction('Вал'),
  new Construction('Короб вала'),
  new Construction('Полотно ворот'),
  new Construction('Направляющие для движения полотна'),
  new Construction('Короб стойки'),
  new Construction('Нижняя кромка полотна'),
  new Construction('Фотоэлементы'),
  new Construction('Стойка боковая'),
  new Construction('Блок управления'),
  new Construction('Тепловая пушка'),
];

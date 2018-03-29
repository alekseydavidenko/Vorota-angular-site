import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина проема, мм', '1 700 - 2 750'),
  new Size('Высота проема, мм', '1 700 - 2 750'),
  new Size('Притолока, мм', 'от 550'),
  new Size('Пристенки, мм', 'от 175 - 400')
];

export const Constructions: Construction[] = [
  new Construction('Электрический привод'),
  new Construction('Вал'),
  new Construction('Короб вала'),
  new Construction('Полотно ворот'),
  new Construction('Вставка прозрачная (окно/панель)'),
  new Construction('Стойки боковые'),
  new Construction('Направляющие для движения полотна'),
  new Construction('Нижняя кромка полотна'),
  new Construction('Фотоэлементы'),
  new Construction('Блок управления'),
];

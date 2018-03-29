import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина проема, мм', '2 000 - 5 700'),
  new Size('Высота проема, мм', '1 800 - 5 800'),
  new Size('Притолока, мм', 'от 500'),
  new Size('Пристенки, мм', 'от 225 - 475')
];

export const Constructions: Construction[] = [
  new Construction('Электрический привод'),
  new Construction('Вал'),
  new Construction('Короб вала'),
  new Construction('Полотно ворот'),
  new Construction('Вставка прозрачная (окно/панель)'),
  new Construction('Вертикальная направляющая'),
  new Construction('Направляющие для движения полотна'),
  new Construction('Нижняя кромка полотна'),
  new Construction('Фотоэлементы'),
  new Construction('Блок управления'),
  new Construction('Противовес'),
];

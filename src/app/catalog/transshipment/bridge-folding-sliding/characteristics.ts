import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина, мм', '1 200 / 1 500 / 1 800 / 2 000'),
  new Size('Длина, мм', '1 000 / 1 500'),
  new Size('Рабочий диапазон в зависимости от длины платформы, мм', 'вверх 120–180, вниз 120–180'),
  new Size('Толщина верхнего листа, мм', '5'),
];

export const Constructions: Construction[] = [
  new Construction('Ручка управления мостом (с другой стороны)'),
  new Construction('Замок, блокирующий мост в вертикальном положении'),
  new Construction('Аппарель'),
  new Construction('Крышка'),
  new Construction('Полоса сигнальная желто-черная'),
  new Construction('Пружина'),
  new Construction('Механизм пружинной балансировки моста'),
  new Construction('Пластина установочная'),
];

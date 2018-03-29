import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Длина конструкции, мм', '1 300 - 4 000'),
  new Size('Ширина конструкции, мм', '1 000 - 2 400'),
  new Size('Высота конструкции, мм', '350 - 830'),
];

export const Constructions: Construction[] = [
  new Construction('Основание стола'),
  new Construction('Рамка безопасности стола'),
  new Construction('Рычаги внешние стола'),
  new Construction('Рычаги внутренние стола'),
  new Construction('Площадка стола'),
  new Construction('Гидравлическая станция'),
];

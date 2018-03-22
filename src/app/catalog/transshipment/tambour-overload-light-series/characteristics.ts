import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина конструкции, мм', '3 440'),
  new Size('Высота конструкции, мм', '4 561 – 5 161'),
  new Size('Длина конструкции, мм', '2 030 – 4 950'),
];

export const Constructions: Construction[] = [
  new Construction('Доборные элементы'),
  new Construction('Стена'),
  new Construction('Опоры'),
  new Construction('Крыша'),
  new Construction('Ферма'),
];

import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина конструкции, мм', '2 800 – 3 600'),
  new Size('Высота конструкции, мм', '3 700 – 6 600'),
  new Size('Длина конструкции, мм', '2 030 – 7 648'),
];

export const Constructions: Construction[] = [
  new Construction('Стена'),
  new Construction('Опоры'),
  new Construction('Крыша'),
  new Construction('Ферма'),
];

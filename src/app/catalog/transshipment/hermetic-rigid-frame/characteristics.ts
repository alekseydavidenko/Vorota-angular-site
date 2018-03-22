import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина конструкции, мм', '3 000 / 3 200 / 3 400'),
  new Size('Высота конструкции, мм', '3 000 / 3 200 / 3 400 / 4 400'),
];

export const Constructions: Construction[] = [
  new Construction('Корпус герметизатора (2 стены + крыша)'),
  new Construction('Жгут резиновый'),
  new Construction('Верхний фронтальный лист'),
  new Construction('Боковой фронтальный лист'),
  new Construction('Белая световозвращающая пoлоса'),
];

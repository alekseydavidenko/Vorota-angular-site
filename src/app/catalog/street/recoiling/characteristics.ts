import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '	1 000 - 3 000'),
  new Size('Ширина проема, мм', '	2 000 - 7 500'),
  new Size('Просвет, мм', '100'),
];

export const Constructions: Construction[] = [
  new Construction('Несущая балка.'),
  new Construction('Роликовая опора.'),
  new Construction('Ловитель нижний.'),
  new Construction('Крышка балки с роликом.'),
  new Construction('Универсальный верхний ловитель.'),
  new Construction('Направляющее устройство.'),
  new Construction('Электропривод.'),
  new Construction('Силовая рама.'),
];

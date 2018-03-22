import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина конструкции, мм', '3 300 / 3 800 / 4 900'),
  new Size('Высота конструкции, мм', '3 410 / 3 610'),
];

export const Constructions: Construction[] = [
  new Construction('Корпус герметизатора (две стены и крыша)'),
  new Construction('Вентилятор'),
  new Construction('Блоки системы противовеса'),
  new Construction('Противовес'),
  new Construction('Боковая подушка'),
  new Construction('Шторка декоративная'),
  new Construction('Вал cиcтемы противовеса'),
  new Construction('Верхняя подушка'),
];

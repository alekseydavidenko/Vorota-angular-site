import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина конструкции, мм', '2 800 – 3 600'),
  new Size('Высота конструкции, мм', '0 800 – 1 400'),
  new Size('Длина конструкции, мм', '2 030–7 648'),
];

export const Constructions: Construction[] = [
  new Construction('Тумба левая'),
  new Construction('Тумба правая'),
  new Construction('Передняя опорная балка'),
  new Construction('Задняя опорная балка'),
  new Construction('Промежуточная опорная балка'),
  new Construction('Опора левая'),
  new Construction('Опора правая'),
];

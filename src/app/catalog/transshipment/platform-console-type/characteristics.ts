import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Длина платформы с допустимой нагрузкой 6 000 кг (60 кН)*, мм', '2 000 / 2 500 / 3 000 / 3 500'),
  new Size('Длина платформы с допустимой нагрузкой 10 000 кг (100 кН)*, мм', '2 000 / 2 500 / 3 000'),
  new Size('Ширина уравнительной платформы, мм', '1 800 / 2 000 / 2 200'),
];

export const Constructions: Construction[] = [
  new Construction('Аппарель'),
  new Construction('Боковые шторки безопасности'),
  new Construction('Цилиндр аппарели'),
  new Construction('Подъемный цилиндр'),
  new Construction('Растяжка'),
  new Construction('Фронтальная балка'),
  new Construction('Гидравлический насос'),
  new Construction('Крышка платформы'),
  new Construction('Сигнальная желто-черная полоса'),
  new Construction('Блок управления'),
];

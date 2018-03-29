import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Длина платформы с допустимой нагрузкой 6 000 кг (60 кН)*, мм', '2 500 / 3 000 / 3 500 / 4 000 / 4 500'),
  new Size('Длина платформы с допустимой нагрузкой 10 000 кг (100 кН)*, мм', '2 500 / 3 000'),
  new Size('Ширина уравнительной платформы, мм', '1 800 / 2 000 / 2 200'),
  new Size('Рабочий диапазон в зависимости от длины платформы, мм', '| Длина платформы | Вверх | Вниз | 7°'),
  new Size(null, '| 2 500 | 655 | 310 | 260'),
  new Size(null, '| 3 000 | 710 | 305 | 320'),
  new Size(null, '| 3 500 | 775 | 300 | 380'),
  new Size(null, '| 4 000 | 835 | 295 | 440'),
  new Size(null, '| 4 500 | 895 | 290 | 500'),
];

export const Constructions: Construction[] = [
  new Construction('Аппарель'),
  new Construction('Боковые шторки безопасности'),
  new Construction('Цилиндр аппарели'),
  new Construction('Подпорка ремонтная'),
  new Construction('Подъемный цилиндр'),
  new Construction('Гидравлический насос'),
  new Construction('Крышка платформы'),
  new Construction('Сигнальная желто-черная полоса'),
  new Construction('Ферма'),
  new Construction('Блок управления'),
];

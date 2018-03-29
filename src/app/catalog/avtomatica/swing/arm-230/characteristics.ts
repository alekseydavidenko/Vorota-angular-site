import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Мотор-редуктор'),
  new Construction('Трaнсформатор'),
  new Construction('Блок управления'),
  new Construction('Расцепитель'),
  new Construction('Механический ограничитель'),
  new Construction('Рычаг привода'),
  new Construction('Крышка корпуса'),
  new Construction('Задний кронштейн'),
  new Construction('Нижний кожух'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Максимальная длина створки, м', '2', null),
  new Specification('Напряжение питания, В', '220', 'рабочее напряжение двигателей 24 V'),
  new Specification('Максимальный вес створки, кг.', '300', null),
  new Specification('Мощность, Вт', '120', null),
  new Specification('Диапазон рабочих температур, °С', '-20...+55', null),
  new Specification('Скорость открывания, м/мин', '0,78', null),
  new Specification('Класс защиты IP', '44', null),
  new Specification('Интенсивность использования, %', '50', null),
];

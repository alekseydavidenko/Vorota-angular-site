import { Construction, Specification } from '../../../../shared/idex';

export const Constructions: Construction[] = [
  new Construction('Шнур рaсцепителя'),
  new Construction('Ручнaя цепь'),
  new Construction('Двигaтель'),
  new Construction('Блок управления'),
  new Construction('Корпус редуктора'),
  new Construction('Концевые выключaтели'),
  new Construction('Узел ручного привода'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Площадь ворот, м²', '25', null),
  new Specification('Напряжение питания, В', '220-240', null),
  new Specification('Крутящий момент, Нм', '50', null),
  new Specification('Двигатель, В', '220', null),
  new Specification('Диапазон рабочих температур, °С	', '-20...+55', null),
  new Specification('Скорость вращения мотора, об/мин', '1400', null),
  new Specification('Класс защиты IP', '54', null),
  new Specification('Интенсивность использования, %', '40', null)
];

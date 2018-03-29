import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Шнур рaсцепителя'),
  new Construction('Ручнaя цепь'),
  new Construction('Кoрпус редукторa'),
  new Construction('Концевые выключатели'),
  new Construction('Двигатель'),
  new Construction('Блок управления'),
  new Construction('Узел ручного привода'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Площадь ворот, м²', '40', null),
  new Specification('Напряжение питания, В', '380', null),
  new Specification('Крутящий момент, Нм', '120', null),
  new Specification('Двигатель, В', '380', null),
  new Specification('Диапазон рабочих температур, °С', '-30...+55	', null),
  new Specification('Скорость вращения мотора, об/мин', '1400', null),
  new Specification('Класс защиты IP', '44', null),
  new Specification('Интенсивность использования, %', '65', null),
];

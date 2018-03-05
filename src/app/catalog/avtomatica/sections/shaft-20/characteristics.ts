import { Construction, Specification } from '../../../../shared/idex';

export const Constructions: Construction[] = [
  new Construction('Мотор-редуктор'),
  new Construction('Рукояткa рaсцепителя'),
  new Construction('Кронштейн крепления'),
  new Construction('Концевые выключaтели'),
  new Construction('Блок упрaвления'),
  new Construction('Корпус блока управления'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Площадь ворот, м²', '12', null),
  new Specification('Напряжение питания, В', '220-240', null),
  new Specification('Крутящий момент, Нм', '20', null),
  new Specification('Двигатель, В', '220', null),
  new Specification('Диапазон рабочих температур, °С', '-20...+55	', null),
  new Specification('Скорость вращения мотора, об/мин', '1400', null),
  new Specification('Класс защиты IP', '20', null),
  new Specification('Интенсивность использования, %', '50', null),
];

import { Construction, Specification } from '../../../shared/idex';

export const Constructions: Construction[] = [
  new Construction('Винт крепления крышки с внутренним шестигранником'),
  new Construction('Защитная крышка из окрашенной стaли'),
  new Construction('Каркас из окрашенной стали'),
  new Construction('Встроенный блок управления PCB-SL'),
  new Construction('Корпус'),
  new Construction('Двигатель 220 В со встроенной защитой от перегрева'),
  new Construction('Расцепитель'),
  new Construction('Анкерный болт'),
  new Construction('Цепь и замок'),
  new Construction('Нейлоновый ролик для цепи'),
  new Construction('Нейлоновый направляющий шкив SLAVE'),
  new Construction('Противовес с нейлоновым роликом'),
  new Construction('Узел крепления цепи'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Ширина проема, м', '7–15', null),
  new Specification('Напряжение питания, В', '220', null),
  new Specification('Мощность, Вт', '280', null),
  new Specification('Диапазон рабочих температур, °С', '-20...+55', null),
  new Specification('Максимальный действующий момент, Нм', '20', null),
  new Specification('Класс защиты IP', '54', null),
  new Specification('Интенсивность использования, %', '50', null),
];

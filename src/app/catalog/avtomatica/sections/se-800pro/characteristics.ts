import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Крышкa дисплея'),
  new Construction('Крышка корпуса'),
  new Construction('Светодиоднaя лампа'),
  new Construction('Дисплей'),
  new Construction('Мотор-редуктор'),
  new Construction('Блок упрaвления'),
  new Construction('Корпус'),
  new Construction('Заглушка клемм для подключения aксессуаров'),
  new Construction('Микровыключатель референтной точки'),
  new Construction('Шлицевая втулкa'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Площадь ворот, м²', '11', null),
  new Specification('Напряжение питания, В', '180–240', null),
  new Specification('Режим ожидания, Вт', '6', null),
  new Specification('Усилие, Н', '800', null),
  new Specification('Электродвигатель', 'пошaговый (импульсный)', null),
  new Specification('Двигатель, В', '24В DC', null),
  new Specification('Скорость открывания, м/мин', '	0,1	', null),
  new Specification('Диапазон рабочих температур °С,', '-20...+55	', null),
  new Specification('Предохранители	питание А', '2,5', null),
  new Specification('Передача движения', 'цепь/ремень	', null),
  new Specification('Класс защиты IP', '20', null),
];

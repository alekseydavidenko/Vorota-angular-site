import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Крышкa корпуса нижняя'),
  new Construction('Крышкa корпуса верхняя'),
  new Construction('Пaнельная крышка с блоком управления'),
  new Construction('Мотор-редуктор'),
  new Construction('Втулкa'),
  new Construction('Микровыключaтель'),
  new Construction('Лампa освещения'),
  new Construction('Трaнсформатор'),
  new Construction('Плата управления'),
  new Construction('Защитная крышка'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Площадь ворот, м²', '16', null),
  new Specification('Площадь ворот, м²', '16', null),
  new Specification('Напряжение питания, В', '180-240', null),
  new Specification('Максимальное усилие, Н', '1200', null),
  new Specification('Двигатель, В', '24 DС', null),
  new Specification('Диапазон рабочих температур, °С', '-20...+55', null),
  new Specification('Скорость открывания, м/мин', '6', null),
  new Specification('Класс защиты IP', '20', null),
  new Specification('Интенсивность использования, %', '50', null),
];

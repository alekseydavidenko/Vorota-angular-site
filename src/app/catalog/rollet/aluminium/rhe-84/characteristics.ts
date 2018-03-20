import { Construction, Size } from '../../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '500 - 5 000'),
  new Size('Ширина проема, мм', '800 - 5 500'),
  new Size('Максимальная площадь полотна, м²', '20,5'),
  new Size('Притолока, мм', 'от 300 (Накладной монтаж)'),
  new Size('Пристенки, мм', 'от 83 (Накладной монтаж)'),
];

export const Constructions: Construction[] = [
  new Construction('Крышка боковая RK300, RSK300, RK375'),
  new Construction('Суппорт подшипника BS32'),
  new Construction('Ролик направляющий RU77 (RV77)'),
  new Construction('Подшипник BS32'),
  new Construction('Капсула универсальная KPU102'),
  new Construction('Вал октагональный RV102'),
  new Construction('Кольцо ригельное RD60, RD70'),
  new Construction('Короб защитный RBN300, RBN375'),
  new Construction('Профиль верхний RH30FM'),
  new Construction('Электропривод внутривальный'),
  new Construction('Пластина крепления привода BU100K'),
  new Construction('Направляющий профиль RG83MS, RG90MS, RG100'),
  new Construction('Заглушка PB14'),
  new Construction('Замок боковой SL84, SLE84'),
  new Construction('Профиль концевой RA77EM, RA77KN'),
  new Construction('Профиль (полотно) RHE84M, RHE84GM'),
  new Construction('Выключатель с ключом SWM, SWK'),
  new Construction('Выключатель клавишный SWB, SWH'),
];

import { Construction, Size } from '../../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '500 - 4 500'),
  new Size('Ширина проема, мм', '500 - 5 000'),
  new Size('Максимальная площадь полотна, м²', '18'),
  new Size('Притолока, мм', 'от 250 (Накладной монтаж)'),
  new Size('Пристенки, мм', 'от 83 (Накладной монтаж)'),
];

export const Constructions: Construction[] = [
  new Construction('Крышка боковая RK250S, RK300, RSK300, RK375'),
  new Construction('Суппорт подшипника BS100, BS42'),
  new Construction('Ролик направляющий RU77 (RV77)'),
  new Construction('Подшипник BR28, BR42'),
  new Construction('Капсула универсальная KP60, KPU60, KPU70, KPU70S, KPU102'),
  new Construction('Вал октагональный RV60, RV70, RV102'),
  new Construction('Кольцо ригельное RD60, RD70'),
  new Construction('Короб защитный RB250, RB300, RB375'),
  new Construction('Замок автоматический RB4'),
  new Construction('Электропривод внутривальный'),
  new Construction('Пластина крепления привода BU100K'),
  new Construction('Направляющий профиль RG83MS, RG90MS, RG100'),
  new Construction('Заглушка PB14'),
  new Construction('Замок боковой SL77'),
  new Construction('Профиль концевой RA77EM, RA77KN'),
  new Construction('Профиль (полотно) RH77M'),
  new Construction('Выключатель с ключом SWM, SWK'),
  new Construction('Выключатель клавишный SWB, SWH'),
];

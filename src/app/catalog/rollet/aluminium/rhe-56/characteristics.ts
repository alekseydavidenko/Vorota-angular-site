import { Construction, Size } from '../../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '500 - 4 500'),
  new Size('Ширина проема, мм', '500 - 3 500'),
  new Size('Максимальная площадь полотна, м²', '15'),
  new Size('Притолока, мм', 'от 180 (Накладной монтаж)'),
  new Size('Пристенки, мм', 'от 65 (Накладной монтаж)'),
];

export const Constructions: Construction[] = [
  new Construction('Крышка боковая RK180, RK205, RK250, RK250S, RK300, RSK300'),
  new Construction('Суппорт подшипника BS100, BS42'),
  new Construction('Направляющее устройство RU65'),
  new Construction('Подшипник BR28, BR42'),
  new Construction('Капсула универсальная KP60, KPU60, KPU70, KPU70S, KPU102'),
  new Construction('Вал октагональный RV60, RV70, RV102'),
  new Construction('Кольцо ригельное RD60, RD70'),
  new Construction('Короб защитный RB180, RB205, RB250, RB300'),
  new Construction('Замок автоматический RB2, RB3, RB4'),
  new Construction('Электропривод внутривальный'),
  new Construction('Пластина крепления привода BU100K'),
  new Construction('Направляющий профиль RG65MS, RG65BS, RG70MS,RG70BS'),
  new Construction('Заглушка PB14'),
  new Construction('Замок боковой SLE56'),
  new Construction('Профиль концевой RA50EM'),
  new Construction('Профиль (полотно) RHE56M, RHE56GM'),
  new Construction('Выключатель с ключом SWM, SWK'),
  new Construction('Выключатель клавишный SWB, SWH'),
];

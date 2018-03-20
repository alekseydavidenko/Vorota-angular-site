import { Construction, Size } from '../../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '500 - 5 500'),
  new Size('Ширина проема, мм', '400 - 3 050'),
  new Size('Максимальная площадь полотна, м²', '9.5'),
  new Size('Притолока, мм', 'от 125 (Накладной монтаж)'),
  new Size('Пристенки, мм', 'от 53 (Накладной монтаж)'),
];

export const Constructions: Construction[] = [
  new Construction('Крышка боковая RK125, RK137, RSK137, RK150, RK165, RK180, RK205, RK250'),
  new Construction('Суппорт подшипника BS100'),
  new Construction('Направляющее устройство RU45'),
  new Construction('Подшипник BR28, BR42'),
  new Construction('Капсула универсальная KP40, KP60, KPU60, KPU70'),
  new Construction('Вал октагональный RV40, RV60, RV60-1, RV70'),
  new Construction('Кольцо ригельное RD40, RD60, RD70'),
  new Construction('Короб защитный RB125, RB137, RB150, RB165, RB180, RB205, RB250'),
  new Construction('Замок автоматический RM1'),
  new Construction('Электропривод внутривальный'),
  new Construction('Пластина крепления привода BU100K'),
  new Construction('Направляющий профиль RG52M, RG53BN, RG53MS, RG62BS, RG64'),
  new Construction('Заглушка PB14'),
  new Construction('Замок боковой SL41N, SL45M, SLA45'),
  new Construction('Профиль концевой RA45EN, RA45KN'),
  new Construction('Профиль (полотно) RH41N, RH45N'),
  new Construction('Выключатель с ключом SWM, SWK'),
  new Construction('Выключатель клавишный SWB, SWH'),
];

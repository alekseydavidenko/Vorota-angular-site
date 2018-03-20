import { Injectable } from '@angular/core';

import { Product } from './product';
import { Specification } from './specification';

@Injectable()
export class AutomaticaService {
  products = {
    transmitter2Pro: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/transmitter-2-pro.jpg',
      'Пульт 2-х канальный TRANSMITTER 2-PRO',
      'предназначен для дистанционного управления двумя автоматическими'
      + 'устройствами DoorHan или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
      [
        new Specification('Рабочая частота канала, Гц', '433'),
        new Specification('Количество каналов', '2'),
        new Specification('Тип батареи', 'CR-2032'),
        new Specification('Класс защиты IP', '20'),
      ]
    ),
    transmitter4Pro: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/transmitter-4-pro.jpg',
      'Пульт 4-х канальный TRANSMITTER 4-PRO',
      'предназначен для дистанционного управления двумя автоматическими устройствами DoorHan'
      + 'или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
      [
        new Specification('Рабочая частота канала, Гц', '433'),
        new Specification('Количество каналов', '4'),
        new Specification('Тип батареи', 'CR-2032'),
        new Specification('Класс защиты IP', '20'),
      ]
    ),
    transmitter4: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/transmitter-4.jpg',
      'Пульт 4-х канальный TRANSMITTER 4',
      'предназначен для дистанционного управления четырьмя автоматическими устройствами DoorHan'
      + 'или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
      [
        new Specification('Рабочая частота канала, Гц', '433'),
        new Specification('Количество каналов', '4'),
        new Specification('Тип батареи', '27A'),
        new Specification('Класс защиты IP', '20'),
      ]
    ),
    carTransmitter: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/car-transmitte.jpg',
      'Пульт СAR-TRANSMITTER',
      'двухканальный пульт дистанционного управления вставляемый в посадочное место прикуривателя автомобиля.'
      + 'Пульт работает от автономной батареи питания.',
      [
        new Specification('Рабочая частота канала, МГц', '433'),
        new Specification('Класс защиты IP', '20'),
        new Specification('Тип батареи', 'CR-2032'),
      ]
    ),
    transmitterPremium: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/transmitter-4-premium.jpg',
      'Пульт 4-х канальный TRANSMITTER PREMIUM',
      'предназначен для дистанционного управления четырьмя автоматическими устройствами DoorHan'
      + 'или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
      [
        new Specification('Рабочая частота канала, MГц', '433'),
        new Specification('Количество каналов', '4'),
        new Specification('Тип батареи', '27A'),
        new Specification('Класс защиты IP', '20'),
      ]
    ),
    command: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/command-433.jpg',
      'Кнопочная панель COMMAND433',
      '2-х кнопочная радиопанель, которая позволяет дистанционно управлять системой автоматизации DoorHan'
      + 'и не требует дополнительного монтажа. Для стационарного управления кнопку можно легко установить на стене'
      + 'или козырьке автомобиля с помощью специального крепления входящего в комплект.',
      [
        new Specification('Рабочая частота канала, MГц', '433'),
        new Specification('Тип батареи', '23AE'),
        new Specification('Класс защиты IP', '20'),
      ]
    ),
    dhre1: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/dhre-1.jpg',
      'Приемник DHRE-1 внешний одноканальный',
      'предназначен для управления автоматикой компании DoorHan или других производителей при помощи пультов DoorHan.',
      [
        new Specification('Рабочая частота канала, MГц', '433'),
        new Specification('Класс защиты IP', '20'),
        new Specification('Память приемника', 'до 1000 пультов'),
      ]
    ),
    repeater1: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/repeater-1.jpg',
      'Блок управления REPEATER-1.0',
      'Устройство для ретрансляции сигналов пультов DoorHan на частоте 433,92 МГц (далее — репитер)'
      + 'предназначено для увеличения зоны передачи сигналов от пульта. При нажатии на кнопку пульта репитер принимает сигнал,'
      + 'а затем при успешном приеме ретранслирует его.',
      [
        new Specification('Дальность передачи сигнала от пульта, м', '200'),
        new Specification('Напряжение питания по низковольтному входу', '8...35 В (DC)'),
        new Specification('Напряжение питания по высковольтному входу', '~ 230В ±10 %'),
        new Specification('Мощность радиопередатчика дБм', '+10'),
        new Specification('Рабочая частота канала, MГц', '433,92 ±0,2 %'),
        new Specification('Диапазон рабочих температур, °С', '-40...+55'),
      ]
    ),
    smartcontrol2: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/wifi-smartcontrol-2.jpg',
      'Приемник WIFI SMARTCONTROL-2',
      'предназначен для беспроводного управления (выработки сигнала управления"NO") электроприводами.',
      [
        new Specification('Рабочая частота канала, MГц', '2,4'),
        new Specification('Напряжение питания, В', '12...24 DC'),
        new Specification('Сила тока, мА', '60...90'),
        new Specification('Макс. количество подключаемых пользователей', '5'),
        new Specification('Количество каналов', '2'),
        new Specification('Диапазон рабочих температур, °С', '0...+55'),
      ]
    ),
    gsm2: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/gsm-2.jpg',
      'Модуль GSM-2.0',
      'редназначен для приема сигнала с мобильного телефона и его преобразования в команду для управления автоматической системой.',
      [
        new Specification('Напряжение питания, В', '12/24 В AC/DC	'),
        new Specification('Потребляемая мощность, Вт', 'не более 2'),
        new Specification('Память приемника	до', '1000 номеров'),
        new Specification('Класс защиты IP', '65'),
        new Specification('Диапазон рабочих температур, °С', '-20...+40'),
      ]
    ),
    antenna: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/antenna.jpg',
      'Антенна 433MHZ',
      'создана для увеличения дальности приема сигнала с пультов дистанционного управления.'
      + 'Кронштейн крепления антены мобилен и удобен при монтаже.',
      [
        new Specification('Диапазон рабочих температур, °С', '-50...+85°'),
        new Specification('Длина кабеля, м', '5'),
        new Specification('Рабочая частота канала, MГц', '433'),
      ]
    ),
    keyswitch: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/key-swich.jpg',
      'Ключ-кнопка KEYSWITCH-N',
      'спользуется для подачи управляющей команды на блок управления автоматической системы, которая открывает,'
      + 'останавливает и закрывает ворота или шлагбаум с помощью поворота ключа по принципу «открыть» — «стоп» — «закрыть» — «стоп».',
      [
        new Specification('Напряжение питания, В', 'до 250V'),
        new Specification('Тип управляющего контакта', 'NO/NC'),
        new Specification('Диапазон рабочих температур, °С', '-40... +50'),
        new Specification('Класс защиты IP', '54'),
      ]
    ),
    photosell: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/photo-cell.jpg',
      'Фотоэлементы PHOTOCELL-N',
      'устройство безопасности, состоящее из инфракрасного передатчика и приемника, которые устанавливаются в проем ворот.'
      + 'В случае пересечения инфракрасного луча в блок управления поступает сигнал о появлении препятствия в опасной зоне'
      + 'действия автоматической системы, и система вырабатывает реакцию, соответствующую установленной логике'
      + 'работы - остановка или реверс полотна ворот.',
      [
        new Specification('Напряжение питания, В', '12/24 DC'),
        new Specification('Зона действия, м', 'до 40'),
        new Specification('Сила тока, А', 'RX 13 mA TX mA'),
        new Specification('Тип управляющего контакта', 'NO/NC'),
        new Specification('Диапазон рабочих температур, °С', '-20...+70'),
      ]
    ),
    photosellPro: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/photo-cell-pro.jpg',
      'Фотоэлементы Беспроводные PHOTOCELL-PRO',
      'устройство безопасности, состоящее из инфракрасного передатчика и приемника, которые устанавливаются в проем ворот.'
      + 'В случае пересечения инфракрасного луча в блок управления поступает сигнал о появлении препятствия в опасной зоне'
      + 'действия автоматической системы, и система вырабатывает реакцию, соответствующую установленной логике'
      + 'работы - остановка или реверс полотна ворот. Поворотная плата позволяет монтировать фотоэлемент на неровных поверхностях.',
      [
        new Specification('Напряжение питания, В', '12/24DC'),
        new Specification('Потребляемая мощность, Вт', 'RX 30 mA TX 60 mA'),
        new Specification('Тип батареи	передатчика', 'CR 123 A'),
        new Specification('Диапазон рабочих температур, °С', '-20...+70'),
        new Specification('Класс защиты IP', '54'),
        new Specification('Тип управляющего контакта', 'NO/NC'),
      ]
    ),
    lampPro: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/lamp-pro.jpg',
      'Сигнальная лампа LAMP-PRO',
      'устройство безопасности. Предупреждает о начале движении ворот, работает в течении всего цикла их движения.',
      [
        new Specification('Напряжение питания, В', '12...250'),
        new Specification('Мощность, Вт', '3'),
        new Specification('Класс защиты IP', '54'),
        new Specification('Диапазон рабочих температур, °С', '-40...+50'),
      ]
    ),
    trafficlightLed: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/trafficlight-led.jpg',
      'Cветофор TRAFFICLIGHT-LED',
      'предназначен для использования с автоматическими устройствами, ограничивающими доступ на стоянках, автомойках,'
      + 'в гаражных комплексах, подземных и многоуровневых паркингах. Применение данных светофоров позволяет повысить'
      + 'безопасность движения транспортных средств при въезде/выезде на огороженной территории,'
      + 'а также существенно снизить энергопотребление.',
      [
        new Specification('Напряжение питания, В', '230'),
        new Specification('Мощность, Вт', '1.5'),
        new Specification('Класс защиты IP', '65'),
      ]
    ),
    sirena: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/sirena.jpg',
      'Сигнализация звуковая SIRENA',
      'Сирена предназначена для подачи звукового сигнала во время движения ворот,'
      + 'шлагбаумов и других автоматических ограждающих конструкций.',
      [
        new Specification('Напряжение питания, В', '220'),
        new Specification('Класс защиты IP', '20'),
      ]
    ),
    dhSensorKit: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/dg-sevsor-kit.jpg',
      'Кромка безопасности DH-SENSOR-KIT',
      'предназначена для обеспечения безопасности эксплуатации секционных ворот. При ударе ворот о препятствие,'
      + 'трубка деформируется, внутренний объем в трубке сокращается и датчик срабатывает.'
      + 'Датчик подает сигнал на блок управления на остановку или реверс ворот',
      [
        new Specification('Напряжение питания, В', '12-24 AC/DC (для приемника)'),
        new Specification('Мощность, Вт', '1,5 (для приемника)	'),
        new Specification('Тип батареи', 'CR2032 x 2 (для передатчика)'),
        new Specification('Мощность, Вт', 'менее 10мВт (для передатчика)'),
        new Specification('Рабочая частота канала, Гц', '315Мгц'),
        new Specification('Дальность передачи сигнала от пульта, м', 'до 15 (для связи передатчик- приемник)'),
        new Specification('Тип управляющего контакта', 'NO/NC'),
      ]
    ),
    optokit: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/optokit.jpg',
      'Комплект оптосенсоров для секционных приводов OPTOKIT',
      'предназначены для обеспечения безопасности эксплуатации секционных ворот.'
      + 'Приемник и передатчик размещаются в нижнем резиновом профиле Rubber,'
      + 'при деформации которого прерывается оптический луч и подается сигнал блоку управления на остановку или реверс ворот.',
      [
        new Specification('Напряжение питания, В', '24 AC/DC +20% / -10%'),
        new Specification('Класс защиты IP', '65'),
        new Specification('Диапазон рабочих температур, °С', '-40...+55'),
        new Specification('Тип управляющего контакта', 'NC/NO'),
      ]
    ),
    stop: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/stop.jpg',
      'Кнопка STOP для аварийной остановки привода',
      'предназначена для мгновенной остановки приводов в экстренных ситуациях.',
      [
        new Specification('Напряжение питания, В', 'до 240'),
        new Specification('Диапазон рабочих температур, °С', '-40...+55'),
        new Specification('Класс защиты IP', '54'),
      ]
    ),
    wdkit: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/wdkit.jpg',
      'Комплект встраиваемого датчика открытой калитки WDKIT',
      'предназначен для обеспечения безопасного использования ворот с врезной калиткой'
      + 'При открытой калитке сигнал с датчика блокирует работу привода, предотвращая движение ворот.',
      [
        new Specification('Напряжение питания, В', '12/24 AC/DC'),
        new Specification('Класс защиты IP', '68'),
        new Specification('Диапазон рабочих температур, °С', '-40...+75'),
      ]
    ),
    keypad: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/keypad.jpg',
      'Клавиатура кодовая беспроводная KEYPAD',
      'совместимая с встроенным и внешним приемниками DoorHan, позволяет дистанционно управлять приводами DoorHan.',
      [
        new Specification('Количество каналов', '2'),
        new Specification('Рабочая частота канала, МГц', '433'),
        new Specification('Тип батареи', 'CR2032 2 шт.'),
        new Specification('Напряжение питания, В', '12/24 (Если установка элемента питания невозможна,'
        + 'допускается подключение устройства через внешний источник питания на клемму CN1)'),
        new Specification('Сила тока, А', 'менее 2 mA'),
        new Specification('Класс защиты IP', '54'),
        new Specification('Диапазон рабочих температур, °С', '-20...+55'),
      ]
    ),
    keycode: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/keycode.jpg',
      'Антивандальная кодовая клавиатура KEYCODE',
      'предназначена для управления автоматическими ограждающими конструкциями по средством прокси-карт и/или PIN кода.',
      [
        new Specification('Напряжение питания, В', '12/24 DC'),
        new Specification('Сила тока, А', '80 mA'),
        new Specification('Диапазон рабочих температур, °С', '-45...+60'),
        new Specification('Класс защиты IP', '68'),
        new Specification('Макс. количество подключаемых пользователей', '2000'),
        new Specification('Тип управляющего контакта', 'NO/NC'),
      ]
    ),
    domo7: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/domo7.jpg',
      'Комплект видеодомофона DOMO7',
      'используется для круглосуточного контроля доступа, вызовов, открытия дверей и ворот,'
      + 'обеспечения безопасности коттеджей, дач, домов, гостиниц, офисов и других объектов.',
      [
        new Specification('Напряжение питания, В', '12 DC'),
        new Specification('Сила тока, А', '1,1'),
        new Specification('Потребляемая мощность, Вт', 'режим ожидания-2 рабочий режим-7'),
        new Specification('Диапазон рабочих температур, °С', '-10...+40 (-30...55 внешний модуль)'),
      ]
    ),
    radioparking: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/radioparking.jpg',
      'Блок управления RADIOPARKING',
      'предназначен для управления автоматическими ограждающими конструкциями посредством пультов Transmitter.',
      [
        new Specification('Напряжение питания, В', '12...24 DC'),
        new Specification('Мощность, Вт', '1'),
        new Specification('Макс. количество подключаемых пользователей', '1500'),
        new Specification('Диапазон рабочих температур, °С', '-40...+55'),
      ]
    ),
    dhLockKit: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/dh-lock-kit.jpg',
      'Комплект замка электромеханического DH-LOCK-KIT / DH-LOCK60-KIT',
      'Замок поддерживает электрическое и ручное управление, обладает надежной защитой и высоким уровнем безопасности.'
      + 'Предназначен для калиток с электроприводами, системами контроля доступа и домофонами. Замок может устанавливаться в жилых,'
      + 'офисных и производственных зданиях, складах, гостиницах, общественных учреждениях и т. д.',
      [
        new Specification('Напряжение питания, В', '12'),
        new Specification('Сила тока, А', '3'),
        new Specification('Класс защиты IP', '54'),
      ]
    ),
    estrike: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/estrike.jpg',
      'Защелка электоромеханическая Eatrike',
      'является ответной частью замка и устанавливается в дверную раму отдельно стоящих калиток.'
      + 'Устройство избавляет от необходимости установки кабелепрохода и переходников,'
      + 'а также сводит к минимуму требования к гибкости и прочности кабеля.'
      + 'Защелку можно использовать с любыми системами контроля доступа.',
      [
        new Specification('Напряжение питания, В', '12 DC'),
        new Specification('Сила тока, А', '450 mA'),
        new Specification('Диапазон рабочих температур, °С', '-20...+55'),
        new Specification('Класс защиты IP', '54'),
      ]
    ),
    magLockKiit: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/mag-lock-kit.jpg',
      'Комплект замка электромагнитного MAG-LOCK-KIT',
      'Предназначен для установки на уличные двери, калитки и распашные ворота,'
      + 'оснащенные электроприводом, системами контроля доступа и домофонами',
      [
        new Specification('Напряжение питания, В', '12 / 24'),
        new Specification('Сила тока, А', '0,4 / 0,2'),
        new Specification('Диапазон рабочих температур, °С', '-30...+50'),
      ]
    ),
    sk3600: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/sk-3600.jpg',
      'Цепная направляющая',
      'серии SK',
      []
    ),
    lock: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/lock.jpg',
      'Внешний расцепитель LOCK',
      'для открытия гаражных секционных ворот в случае отключения электроэнергии,'
      + 'необходим при отсутствии врезной калитки или другого дополнительного входа в помещение',
      []
    ),
    lockN: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/lock-n.jpg',
      'Внешний расцепитель LOCK-N',
      'для открытия ворот в случае отключения электроэнергии. Незаменим при отсутствии'
      + 'врезной калитки или другого дополнительного входа в помещение',
      []
    ),
    lockMini: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/lock-mini.jpg',
      'Внешний расцепитель LOCK- MINI',
      'для открытия ворот в случае отключения электроэнергии. Незаменим при отсутствии'
      + 'врезной калитки или другого дополнительного входа в помещение',
      []
    ),
    sk4600: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/sk-4600.jpg',
      'Цепная направляющая',
      'серии SK',
      []
    ),
    heater: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/heater.jpg',
      'Обогреватель Heater',
      'предназначен для обогрева электроприводов ворот и шлагбаумов при эксплуатации в условиях низких температур',
      []
    ),
    rightArrow: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/right-arrow.jpg',
      'Стрела прямоугольная',
      'длиной от 3 до 6 м.',
      []
    ),
    roundArrow: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/round-arrow.jpg',
      'Стрела круглая',
      'длиной от 3 до 6 м (кратность длины: 1 м).',
      []
    ),
    rightArrowLight: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/right-arrow-light.jpg',
      'Стрела прямоугольная',
      'с подсветкой длиной от 3 до 6 м (кратность длины: 1 м).',
      []
    ),
    bindingArrow: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/binding-arrow.jpg',
      'Комплект крепления',
      'для круглой стрелы шлагбаума.',
      []
    ),
    catherArrow: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/catcher-arrow.jpg',
      'Ловитель',
      'для стрелы шлагбаума с регулировкой высоты ловителя.',
      []
    ),
    installationBarrier: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/installation-barrier.jpg',
      'Монтажное основание',
      'для бетонирования.',
      []
    ),
    supportArrow: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/support-arrow.jpg',
      'Шарнирная опора',
      'для стрелы шлагбаума крепится на окончание стрелы.',
      []
    ),
    br11Pro: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/br-11-pro.jpg',
      'Пружина',
      'балансировочная BR-11PRO.',
      []
    ),
    br13Pro: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/br-13-pro.jpg',
      'Пружина',
      'балансировочная BR-13PRO.',
      []
    ),
    skirtArrow: new Product(
      '../../../assets/img/catalog/avtomatica/acsessuars/skirt-arrow.jpg',
      'Юбочный комплект',
      'для прямоугольной стрелы.',
      []
    ),
  };

  getProducts(index): Product[] {
    const obj: Product[] = [];

    index.forEach(element => {
      for (const item in this.products) {
        if (element === item) {
          obj.push(this.products[element]);
        }
      }
    });

    return obj;
  }
}




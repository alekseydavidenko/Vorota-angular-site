import { Injectable } from '@angular/core';

import { Slide } from './slide';
import { Caption } from './caption';
import { Carusel } from './carusel';

const carusel: Carusel[] = [
  new Slide(
    '../../../assets/img/carusel/section.jpg',
    'Ворота секционные',
    [
      new Caption('/catalog/section/torsional', 'гаражные'),
      new Caption('/catalog/section/industrial', 'промышленые'),
      new Caption('/catalog/section/panorama', 'панорамные'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/street.jpg',
    'Уличные ворота, калитки',
    [
      new Caption('/catalog/street/recoiling', 'откатные'),
      new Caption('/catalog/street/swinging', 'распашные'),
      new Caption('/catalog/street/wickets', 'калитки'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/rollet.jpg',
    'Рольставни, рольворота',
    [
      new Caption('/catalog/rollet/aluminium', 'алюминиевый профиль'),
      new Caption('/catalog/rollet/steel', 'стальной профиль'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/automatic.jpg',
    'Автоматика для ворот',
    [
      new Caption('/catalog/avtomatica/sections', 'секционная'),
      new Caption('/catalog/avtomatica/sliding', 'откатная'),
      new Caption('/catalog/avtomatica/swing', 'распашная'),
      new Caption('/catalog/avtomatica/acsessuars', 'аксессуары'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/barrier.jpg',
    'Шлагбаумы, цепные барьеры',
    [
      new Caption('/catalog/barrier/barrier', 'шлагбаумы'),
      new Caption('/catalog/barrier/chain-barrier', 'цепные барьеры'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/anti-fire.jpg',
    'Противопожарные ворота',
    [
      new Caption('/catalog/anti-fire/section', 'секционные'),
      new Caption('/catalog/anti-fire/recoiling', 'откатные'),
      new Caption('/catalog/anti-fire/swinging', 'распашные'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/speed-roll.jpg',
    'Скоростные ворота, пленочные завесы',
    [
      new Caption('/catalog/speed-roll/inside', 'внутриние'),
      new Caption('/catalog/speed-roll/outside', 'наружные'),
      new Caption('/catalog/speed-roll/film-veils', 'пленочные завесы'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/trasshipment.jpg',
    'Перегрузочное оборудование',
    [
      new Caption('/catalog/transshipment/platform-swing-out', 'платформы'),
      new Caption('/catalog/transshipment/hermetic-folding-frame', 'герметизаторы'),
      new Caption('/catalog/transshipment/tambour-overload-standard', 'тамбора перегрузочные'),
      new Caption('/catalog/transshipment/bridge-folding-sliding', 'мосты'),
    ]
  ),
  new Slide(
    '../../../assets/img/carusel/rapm-and-table.jpg',
    'Рампы мобильные, столы подьемные',
    [
      new Caption('/catalog/ramp-and-table/with-support', 'рампы'),
      new Caption('/catalog/ramp-and-table/one-pair-scissors', 'столы подьемные'),
    ]
  ),
  // new Slide(
  //   '../../../assets/img/carusel',
  //   '',
  //   [
  //     new Caption('', ''),
  //   ]
  // ),
];

const caruselPromise = Promise.resolve(carusel);

@Injectable()
export class CaruselService {
  gerCarusel(): Promise<Carusel[]> {
    return caruselPromise;
  }
}

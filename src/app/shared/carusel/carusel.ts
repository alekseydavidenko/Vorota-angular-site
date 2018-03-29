import { Caption } from './caption';
import { Slide } from './slide';

export class Carusel {
  constructor(
    public img: String,
    public title: String,
    public caption: Caption[]
  ) {}
}

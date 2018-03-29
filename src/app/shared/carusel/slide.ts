import { Caption } from './caption';

export class Slide {
  constructor (
    public img: String,
    public title: String,
    public caption: Caption[]
  ) {}
}

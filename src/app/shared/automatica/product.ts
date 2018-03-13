import { Specification } from './specification';

export class Product {
  constructor(
    public img: string,
    public title: string,
    public description: string,
    public specification: Specification[]
  ) {}
}

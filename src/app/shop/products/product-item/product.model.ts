export class Product {
  constructor(
    public name: string,
    public id: number,
    public price: number,
    public categoryType: string,
    public description: string,
    public imagePath: string,
    public quantity: number
  ) {}
}

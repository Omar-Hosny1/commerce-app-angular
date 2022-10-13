import { Product } from './shop/products/product-item/product.model';

export class ProductsService {
  products: Product[] = [
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product2.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product3.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product7.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product8.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product2.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product3.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product7.jpg',
      1
    ),
    new Product(
      'Shirt',
      Math.random(),
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product8.jpg',
      1
    ),
  ];
  getAllData() {
    return this.products;
  }
  getItem(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == id) {
        return element;
      }
    }
    return this.products[5];
  }
}

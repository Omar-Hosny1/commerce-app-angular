import { Product } from './shop/products/product-item/product.model';

export class ProductsService {
  products: Product[] = [
    new Product(
      'Shirt',
      1,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product2.jpg'
    ),
    new Product(
      'Shirt',
      2,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg'
    ),
    new Product(
      'Shirt',
      2,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product3.jpg'
    ),
    new Product(
      'Shirt',
      2,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg'
    ),
    new Product(
      'Shirt',
      4,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg'
    ),
    new Product(
      'Shirt',
      5,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg'
    ),
    new Product(
      'Shirt',
      6,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product7.jpg'
    ),
    new Product(
      'Shirt',
      7,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product8.jpg'
    ),
    new Product(
      'Shirt',
      1,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product2.jpg'
    ),
    new Product(
      'Shirt',
      2,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg'
    ),
    new Product(
      'Shirt',
      2,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product3.jpg'
    ),
    new Product(
      'Shirt',
      2,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg'
    ),
    new Product(
      'Shirt',
      4,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product4.jpg'
    ),
    new Product(
      'Shirt',
      5,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product1.jpg'
    ),
    new Product(
      'Shirt',
      6,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product7.jpg'
    ),
    new Product(
      'Shirt',
      7,
      54,
      'Ok',
      'This is shirt',
      '../assets/images/product8.jpg'
    ),
  ];
  getAllData() {
    return this.products;
  }
}
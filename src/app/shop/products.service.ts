import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { Product } from './products/product-item/product.model';

@Injectable()
export class ProductsService {
  constructor(private router: Router) {}
  paramsEmitter = new BehaviorSubject<string>('');

  products: Product[] = [
    new Product(
      'Air Pods',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      `Music clears your mind, moves your body and gets you in the zone. The adidas Z.N.E. 01 earbuds offer engaging sound without ever holding you back. When it comes to comfort, these earbuds check all the boxes. They're sleek and simple, giving you an easy fit through active days. Wear them as an everyday pair or while you train. Sweat-proof and splash-proof, they stand up to everything from wet-weather commutes to quick sessions at the gym.`,
      '../assets/images/product2.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product3.jpg',
      1
    ),
    new Product(
      'Adidas Bottle',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product7.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product8.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product2.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'shoes',
      'This is shirt',
      '../assets/images/product3.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product7.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'Shirts and Shoes',
      'This is shirt',
      '../assets/images/product8.jpg',
      1
    ),
  ];
  getData() {
    let paramName: string = '';
    this.paramsEmitter.pipe(take(1)).subscribe((param: string) => {
      paramName = param;
    });

    if (!paramName) {
      return this.products;
    } else {
      return this.getSpecificGategory(paramName);
    }
  }

  getSpecificGategory(gategoryName: string) {
    const res = this.products.filter((ele) => ele.categoryType == gategoryName);
    return res;
  }

  // get
  getItem(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == id) {
        return element;
      }
    }
    this.router.navigate(['/shop']);
    return undefined;
  }
}

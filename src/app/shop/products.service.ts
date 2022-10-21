import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { Product } from './products/product-item/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private router: Router) {}
  paramsEmitter = new BehaviorSubject<string>('');

  products: Product[] = [
    new Product(
      'Air Pods',
      Math.random(),
      54.75,
      'accessories',
      `Music clears your mind, moves your body and gets you in the zone. The adidas Z.N.E. 01 earbuds offer engaging sound without ever holding you back. When it comes to comfort, these earbuds check all the boxes. They're sleek and simple, giving you an easy fit through active days. Wear them as an everyday pair or while you train. Sweat-proof and splash-proof, they stand up to everything from wet-weather commutes to quick sessions at the gym.`,
      '../assets/images/product2.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'clothes',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Good Jacket',
      Math.random(),
      54.75,
      'clothes',
      'This is shirt',
      '../assets/images/product3.jpg',
      1
    ),
    new Product(
      'Adidas Bottle',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Sun Glass',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product5.jpg',
      1
    ),
    new Product(
      'Addidas Hat',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product6.jpg',
      1
    ),
    new Product(
      'Bag',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product7.jpg',
      1
    ),
    new Product(
      'Shoes Colorful',
      Math.random(),
      54.75,
      'shoes',
      'This is shirt',
      '../assets/images/product8.jpg',
      1
    ),
    new Product(
      'Air Pods',
      Math.random(),
      54.75,
      'accessories',
      `Music clears your mind, moves your body and gets you in the zone. The adidas Z.N.E. 01 earbuds offer engaging sound without ever holding you back. When it comes to comfort, these earbuds check all the boxes. They're sleek and simple, giving you an easy fit through active days. Wear them as an everyday pair or while you train. Sweat-proof and splash-proof, they stand up to everything from wet-weather commutes to quick sessions at the gym.`,
      '../assets/images/product2.jpg',
      1
    ),
    new Product(
      'Good T-Shirt',
      Math.random(),
      54.75,
      'clothes',
      'This is shirt',
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'Good Jacket',
      Math.random(),
      54.75,
      'clothes',
      'This is shirt',
      '../assets/images/product3.jpg',
      1
    ),
    new Product(
      'Adidas Bottle',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'Sun Glass',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product5.jpg',
      1
    ),
    new Product(
      'Addidas Hat',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product6.jpg',
      1
    ),
    new Product(
      'Bag',
      Math.random(),
      54.75,
      'accessories',
      'This is shirt',
      '../assets/images/product7.jpg',
      1
    ),
    new Product(
      'Shoes',
      Math.random(),
      54.75,
      'shoes',
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
      let theRenderedList: Product[] = this.getSpecificGategory(paramName);
      if (!theRenderedList.length) {
        this.router.navigate(['page-not-found']);
        return;
      } else return theRenderedList;
    }
  }

  getSpecificGategory(gategoryName: string) {
    const res: Product[] = this.products.filter(
      (ele) => ele.categoryType == gategoryName
    );
    return res;
  }

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

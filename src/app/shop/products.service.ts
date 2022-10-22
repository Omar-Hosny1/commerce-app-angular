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
      2499,
      'accessories',
      `Music clears your mind, moves your body and gets you in the zone. The adidas Z.N.E. 01 earbuds offer engaging sound without ever holding you back. When it comes to comfort, these earbuds check all the boxes. They're sleek and simple, giving you an easy fit through active days. Wear them as an everyday pair or while you train. Sweat-proof and splash-proof, they stand up to everything from wet-weather commutes to quick sessions at the gym.`,
      '../assets/images/product2.jpg',
      1
    ),
    new Product(
      'AEROREADY SHIRT',
      Math.random(),
      749,
      'clothes',
      "The polo shirt goes all the way back to the 19th century, but this one from adidas keeps it modern with moisture-absorbing AEROREADY to keep you cool and dry all day long. The split hem and stretchy piqué fabric provide a comfortable fit that flexes with you whether you're on the links or at a cookout. This product is made with recycled content as part of our ambition to end plastic waste.",
      '../assets/images/product1.jpg',
      1
    ),
    new Product(
      'ADIDAS SPORTSWEAR',
      Math.random(),
      499,
      'clothes',
      "The workout is done. Your head is still in that state of blissed-out, endorphins-filled clarity. Don't mess with it. Keep it going.",
      '../assets/images/product12.jpeg',
      1
    ),
    new Product(
      'MARIMEKKO DOWN',
      Math.random(),
      999,
      'clothes',
      "Marimekko's poppy print is synonymous with the Finnish label. A symbol of creativity, it brightens up this adidas down puffer vest. ",
      '../assets/images/product13.jpeg',
      1
    ),
    new Product(
      'ADICOLOR CLASSICS',
      Math.random(),
      845,
      'clothes',
      "We're not saying that adidas introduced the track suit back in '64. But that doesn't mean others haven't said it. ",
      '../assets/images/product14.jpeg',
      1
    ),
    new Product(
      'HOODED PARKA',
      Math.random(),
      1999,
      'clothes',
      "When we can each be who we are, we're better able to join together for the good of the planet. That's the message of this adidas hoodie. Part of a collaboration with Parley for the Oceans, it connects you to a collective of game-changers and creators who are dedicated to helping end plastic waste. Suit up and join in. Educate and act. Head to Parley for the Oceans website to find out more, sign up and get involved at adidas.com/parley.",
      '../assets/images/product3.jpg',
      1
    ),
    new Product(
      'STRAW METAL BOTTLE',
      Math.random(),
      199,
      'accessories',
      "A water bottle is essential. Hydration is key. This adidas by Stella McCartney water bottle goes beyond essential though. It's a statement accessory. The metal clip lets you hook it on to your bag, because that zebra print was made to be seen. (And it makes sure the bottle's always in easy reach.)",
      '../assets/images/product4.jpg',
      1
    ),
    new Product(
      'CLASSIC 3-STRIPES',
      Math.random(),
      449.5,
      'accessories',
      'An everyday bag for all, made in part with recycled materials.',
      '../assets/images/product15.jpeg',
      1
    ),
    new Product(
      'ESSENTIALS BACKPACK',
      Math.random(),
      299,
      'accessories',
      'Commute in style with this adidas backpack. An interior divider separates your laptop from the rest of your gear. Side pockets and a front zip pocket keep the essentials you reach for the most close at hand.',
      '../assets/images/product16.jpeg',
      1
    ),
    new Product(
      'SILVER METAL SUNGLASS',
      Math.random(),
      600,
      'accessories',
      'Forever pushing boundaries, these adidas sunglasses combine functionality with elevated aesthetics. The cutting-edge frame is produced by a new generation of 3D printers, creating a flexible nylon structure that is treated with a special coating that provides a rubberized texture. A 3D adidas Badge of Sport completes the look.',
      '../assets/images/product5.jpg',
      1
    ),
    new Product(
      'BACK HAT',
      Math.random(),
      699,
      'accessories',
      "This men's hat has low-key Trefoil style with an embroidered logo on the front. Made of washed canvas, the hat has a crushable, packable design and an adjustable back strap so you can personalize the fit.",
      '../assets/images/product6.jpg',
      1
    ),
    new Product(
      'ADICOLOR BACKPACK',
      Math.random(),
      499,
      'accessories',
      "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organized and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.",
      '../assets/images/product7.jpg',
      1
    ),
    new Product(
      'ULTRA BOOST 22',
      Math.random(),
      1999,
      'shoes',
      "The adidas by Stella McCartney Ultraboost 20 Shoe might boast a retro style, but they're actually a high-performance update on our most famous running silhouette. In great news for feet everywhere, they were designed and tested to be comfortably worn on your next 10km run.",
      '../assets/images/product8.jpg',
      1
    ),
    new Product(
      'FORUM LOW SHOES',
      Math.random(),
      450,
      'shoes',
      "Change is possible when we work together. That's why the strap on these adidas Forum shoes is a reminder that we all have a part to play in helping end plastic waste.",
      '../assets/images/product9.jpeg',
      1
    ),
    new Product(
      'OZWEEGO SHOES',
      Math.random(),
      1899,
      'shoes',
      "The future doesn't erase the past. It builds off of it. Think of any sci-fi film you've seen. Innovation and technology may reign supreme, but the nostalgia of the past is undeniable.",
      '../assets/images/product10.jpeg',
      1
    ),
    new Product(
      'ADIDAS RACER',
      Math.random(),
      1799,
      'shoes',
      "The future doesn't erase the past. It builds off of it. Think of any sci-fi film you've seen. Innovation and technology may reign supreme, but the nostalgia of the past is undeniable.",
      '../assets/images/product11.jpeg',
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

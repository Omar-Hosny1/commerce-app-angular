import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../shop/products/product-item/product.model';
@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredProducts: string): any {
    if (!filteredProducts || !value.length) {
      return value;
    }
    let res = [];
    for (let item of value) {
      if (item.name.toLowerCase().includes(filteredProducts.toLowerCase())) {
        res.push(item);
      }
    }

    return res;
  }
}

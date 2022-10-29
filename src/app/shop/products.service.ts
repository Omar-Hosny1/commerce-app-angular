import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, take } from 'rxjs';
import { Product } from './products/product-item/product.model';
import { Store } from '@ngrx/store';
import * as HttpActions from './http-effects-store/http-effects.actions';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ProductsService implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<{
      HttpEffects: { isFetching: boolean; isErrorHappend: boolean };
    }>
  ) {}

  products: Product[] = [];
  paramsEmitter = new BehaviorSubject<string>('');
  productsAdded = new EventEmitter<Product[]>();
  ngOnInit() {}

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

  __getProducts__() {
    this.store.dispatch(new HttpActions.StartFetching());
    this.http
      .get<{ [key: string]: Product[] }>(environment.httpLink + 'products.json')
      .pipe(
        map((resData) => {
          let data: Product[] = [];
          for (const key in resData) {
            data = resData[key];
          }
          return data;
        })
      )
      .subscribe(
        (resData) => {
          this.store.dispatch(new HttpActions.StopFetching());
          this.products = resData;
          this.productsAdded.emit(this.products);
        },
        (err) => {
          this.store.dispatch(new HttpActions.StopFetching());
          this.store.dispatch(new HttpActions.ErrorHappend());
        }
      );
  }
}

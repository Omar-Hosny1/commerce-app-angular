import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shop/products.service';
import { Product } from './product-item/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  filteredProducts = '';
  data: Product[] | undefined = [];
  isFething: boolean;
  error: boolean;
  // isFething: Observable<boolean>;
  // error: Observable<boolean>;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private store: Store<{
      HttpEffects: { isFetching: boolean; isErrorHappend: boolean };
    }>
  ) {}

  ngOnInit(): void {
    this.store.select('HttpEffects').subscribe((state) => {
      this.isFething = state.isFetching;
      this.error = state.isErrorHappend;
    });

    this.productsService.productsAdded.subscribe(
      (Products) => (this.data = Products)
    );
    let queryParams = this.activatedRoute.snapshot.queryParams;
    this.productsService.paramsEmitter.next(queryParams['ARs']);
    this.data = this.productsService.getData();

    // this.productsService.__getProducts__().subscribe(
    //   (resData) => {
    //     this.isFetching = false;
    //     this.data = resData;
    //   },
    //   (err) => {
    //     this.isFetching = false;
    //     this.error = 'Some Thing Went Wrong !';
    //   }
    // );
  }
}

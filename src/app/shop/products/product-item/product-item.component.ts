import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/Authentication.service';
import { CartService } from 'src/app/cart/Cart.service';
import { Product } from './product.model';
import {
  faArrowAltCircleRight,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  faArrowAltCircleLeft = faArrowAltCircleRight;
  faShoppingCart = faShoppingCart;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private cartService: CartService
  ) {}

  onAddToCart() {
    if (!this.authService.isLoggedIn) {
      alert('YOU NEED TO LOGIN FIRST');
      this.router.navigate(['auth']);
    } else {
      this.cartService.addToCard(this.product);
    }
  }
  ngOnInit(): void {}
  toDetailsPage() {
    this.router.navigate([this.product.id], { relativeTo: this.route });
  }
}

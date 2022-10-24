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
  isLoggedIn: boolean;
  faArrowAltCircleLeft = faArrowAltCircleRight;
  faShoppingCart = faShoppingCart;
  showAdded: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  onAddToCart() {
    const isAuthenticated = this.authService.isLoggedInFunc();
    if (!isAuthenticated) {
      this.router.navigate(['auth']);
    } else {
      this.showAdded = true;
      this.cartService.addToCard(this.product);
      setTimeout(() => {
        this.showAdded = false;
      }, 700);
    }
  }

  toDetailsPage() {
    this.router.navigate([this.product.id], { relativeTo: this.route });
  }
}

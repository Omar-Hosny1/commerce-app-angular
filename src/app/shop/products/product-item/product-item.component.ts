import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Authentication.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() id!: number;
  @Input() name?: string;
  @Input() imagePath?: string;
  @Input() price?: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {}

  logTheID() {
    if (!this.authService.isLoggedIn) {
      // alert('YOU NEED TO LOGIN FIRST');
      this.router.navigate(['auth']);
    } else {
      alert('ADDED 👌');
    }
  }
  ngOnInit(): void {}
  toDetailsPage() {
    this.router.navigate([this.id], { relativeTo: this.route });
  }
}

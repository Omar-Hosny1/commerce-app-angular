import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  logTheID() {
    console.log(this.id);
  }
  ngOnInit(): void {}
  toDetailsPage() {
    this.router.navigate([this.id], { relativeTo: this.route });
  }
}

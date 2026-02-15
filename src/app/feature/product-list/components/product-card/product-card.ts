import { Component, input } from '@angular/core';
import { ProductModel } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  public product = input<ProductModel>();
}

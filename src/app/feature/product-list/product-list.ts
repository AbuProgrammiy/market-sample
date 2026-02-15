import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductCard } from './components/product-card/product-card';
import { ProductService } from '../../shared/services/product-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductModel } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);

  protected products=signal<ProductModel[]>([])

  ngOnInit() {
    this.productService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.products.set(data)
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}

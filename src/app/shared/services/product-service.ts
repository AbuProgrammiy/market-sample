import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);

  public getAll(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(
      'https://697ef5a0d1548030ab64d11f.mockapi.io/hello-car/luxry-cars',
    );
  }
}

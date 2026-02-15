import { Routes } from '@angular/router';
import { AppLayout } from './layout/app-layout/app-layout';
import { ProductList } from './feature/product-list/product-list';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        component: ProductList,
      },
    ],
  },
];

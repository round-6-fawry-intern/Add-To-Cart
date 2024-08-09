import { Component } from '@angular/core';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categoryList = ['Laptop', 'IPad', 'Moniter', 'Camera', 'Headphones'];
  productList = [
    {
      productId: 1,
      rating: 0,
      isOffer: false,
      productName: 'Hp Notebook',
      category: 'Laptop',
      price: 1000,
      discount: 12,
      availableQty: 3,
      imageUrl:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp',
    },
    {
      productId: 2,
      rating: 4,
      isOffer: true,
      productName: 'Dell',
      category: 'IPad',
      price: 2000,
      discount: 12,
      availableQty: 3,
      imageUrl:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/2.webp',
    },
    {
      productId: 3,
      rating: 3,
      isOffer: false,
      productName: 'sam',
      category: 'Camera',
      price: 3000,
      discount: 12,
      availableQty: 0,
      imageUrl:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp',
    },
    {
      productId: 4,
      rating: 2,
      isOffer: true,
      productName: 'Hp Lap',
      category: 'Headphones',
      price: 4000,
      discount: 12,
      availableQty: 0,
      imageUrl:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp',
    },
    {
      productId: 5,
      rating: 1,
      isOffer: false,
      productName: 'Hp',
      category: 'Moniter',
      price: 5000,
      discount: 12,
      availableQty: 3,
      imageUrl:
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp',
    },
  ];
}

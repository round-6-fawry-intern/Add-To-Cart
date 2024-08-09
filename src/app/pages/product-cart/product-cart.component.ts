import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input() product:any;

  productService=inject(ProductService)

  getDiscountPrice(product:any){
    const totalValue=product.price*((100-product.discount)/100)
    return totalValue.toFixed(0);
  }

  addToCart(productData:any){
    this.productService.onAddToCart$.next(productData);
  }

}

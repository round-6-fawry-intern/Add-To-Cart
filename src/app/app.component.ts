import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './pages/service/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app-angular-17';
  productService=inject(ProductService);
  isShowCart:boolean=false;
  cartItems:any[]=[];

  constructor(){
    this.productService.onAddToCart$.subscribe((res:any)=>{
      debugger;
      this.cartItems.unshift(res);
    })
  }

  delete(index:number){
    this.cartItems.splice(index,1);
  }

  showCart(){
    this.isShowCart=!this.isShowCart;
  }

  getTotalPrice():number {
    return this.cartItems.reduce((total, item) => total + this.getDiscount(item), 0);
  }

  getDiscountPrice(product:any){
    const totalValue=product.price*((100-product.discount)/100)
    return totalValue.toFixed(0);
  }
  getDiscount(product:any):number{
    const totalValue=product.price*((100-product.discount)/100)
    return totalValue;
  }
}

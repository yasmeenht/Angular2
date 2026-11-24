import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails 
{
   productName: string = "Laptop";
  productDescription: string = "High-performance laptop";
  productPrice: number = 750;
  productImage: string = "https://png.pngtree.com/background/20230526/original/pngtree-sunset-in-the-ocean-palm-on-beach-nature-wallpaper-background-picture-image_2742436.jpg";
  quantity: number = 10;
  isAvailable: boolean = true;
  discountPercentage: number = 15;
}

import { Component } from '@angular/core';

export class Product
{
  ProductName: string = "";
  Description: string = "";
  Price: number = 0;
  Image: string = "";
  Availability: boolean = false;

}
@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})


export class ProductList 
{
   products: Product[] = [
    {
      ProductName: "Laptop",
      Description: "High-performance laptop",
      Price: 750,
      Image: "laptop.jpg",
      Availability: true
    },
    {
      ProductName: "Smartphone",
      Description: "Latest smartphone",
      Price: 450,
      Image: "smartphone.jpg",
      Availability: true
    },
    {
      ProductName: "Headphones",
      Description: "Wireless headphones",
      Price: 80,
      Image: "headphones.jpg",
      Availability: true
    },
    {
      ProductName: "Smart Watch",
      Description: "Smart fitness watch",
      Price: 120,
      Image: "smartwatch.jpg",
      Availability: true
    },
    {
      ProductName: "Keyboard",
      Description: "Mechanical keyboard",
      Price: 45,
      Image: "keyboard.jpg",
      Availability: false
    }
  ];
}

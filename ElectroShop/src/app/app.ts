import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop');

    // productName: string = "Laptop";
    productName = signal("Laptop");
    // productDescription: string = "High-performance laptop";
    productDescription = signal("High-performance laptop");
    productPrice: number = 750;
    productImage: string = "https://png.pngtree.com/background/20230526/original/pngtree-sunset-in-the-ocean-palm-on-beach-nature-wallpaper-background-picture-image_2742436.jpg";
    // quantity: number = 10;
    quantity = signal(10);
    displayQuantity = signal(this.quantity());
    // isAvailable: boolean = true;
    isAvailable = signal(true);
    discountPercentage: number = 15;


    cartName: string = "";
    cartPrice: number = 0;
    cartQuantity: number = 0;

    receiveCart(data: {name: string, price: number, quantity: number}){
      this.cartName = data.name;
      this.cartPrice = data.price;
      this.cartQuantity = data.quantity;
    }

    changeProduct() {
      this.productName.set("Mouse");
      this.productDescription.set("Wireless mouse");
      this.quantity.set(20);
      this.isAvailable.set(true);
      this.productPrice = 25;
    }
}

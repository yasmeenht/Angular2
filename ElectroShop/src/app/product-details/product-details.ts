import { Component, signal, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails 
{
  // // productName: string = "Laptop";
  // productName = signal("Laptop");
  // // productDescription: string = "High-performance laptop";
  // productDescription = signal("High-performance laptop");
  // productPrice: number = 750;
  // productImage: string = "https://png.pngtree.com/background/20230526/original/pngtree-sunset-in-the-ocean-palm-on-beach-nature-wallpaper-background-picture-image_2742436.jpg";
  // // quantity: number = 10;
  // quantity = signal(10);
  // displayQuantity = signal(this.quantity());
  // // isAvailable: boolean = true;
  // isAvailable = signal(true);
  // discountPercentage: number = 15;

  @Input() productName = signal("");
  @Input() productDescription = signal("");
  @Input() productPrice: number = 0;
  @Input() productImage: string = "";
  @Input() quantity = signal(10)
  displayQuantity = signal(this.quantity())
  @Input() isAvailable = signal(false);
  @Input() discountPercentage: number = 0;



  @Output() cartEvent = new EventEmitter<{name: string, price: number, quantity: number}>();

  increase(){
    this.displayQuantity.update(x => x + 1);
  }
  decrease(){
    this.displayQuantity.update(x => x > 0? x - 1: x);
  }
  update(){
    this.quantity.set(this.displayQuantity());
  }
  addToCart(){
    this.cartEvent.emit({
      name: this.productName(),
      price: this.productPrice,
      quantity: this.quantity()
    });
  }

}
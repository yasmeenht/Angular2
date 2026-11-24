import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header 
{
  storeName: string = "ElectroShop Store";
  welcomeMessage: string = "Welcome to our store";
  slogan: string = "Everything you need in one place";
}

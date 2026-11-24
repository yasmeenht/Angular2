import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer
{
  storeName: string = "ElectroShop Store";
  storeAddress: string = "Irbid, Jordan";
  contactEmail: string = "info@example.com";
  copyrightMessage: string = "© 2026 ElectroShop. All rights reserved.";
}
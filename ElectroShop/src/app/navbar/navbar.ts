import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar 
{
  selectedPage: string = "";
  showSelectedPage(page: string) : string{
    this.selectedPage = page;
    return this.selectedPage;
  }
}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [App, Header, Navbar, ProductList, ProductDetails, Footer],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

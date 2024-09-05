import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';  
import { CartComponent } from './components/cart/cart/cart.component';  

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,  // Declare ProductListComponent here
    CartComponent          // Declare CartComponent here
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

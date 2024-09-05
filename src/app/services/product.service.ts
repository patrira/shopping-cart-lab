import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Product {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/data.json';  // Mock API URL

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      catchError(error => {
        console.error('Error fetching product data', error);
        return of([]);  
      })
    );
  }
}

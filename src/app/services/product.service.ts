import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_BASE = `${ environment.url_base }`;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${ this.URL_BASE }/Product/products`);
  }

  public getProductById(id: number): Observable<ProductModel> {
     return this.http.get<ProductModel>(`${ this.URL_BASE }/Product/product/${ id }`);
  }

  public saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${ this.URL_BASE }/Product/Save`, product);
  }

  public updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${ this.URL_BASE }/Product/Update`, product);
  }

  public deleteProduct(id: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${ this.URL_BASE }/Product/Remove/${id}`);
  }
}

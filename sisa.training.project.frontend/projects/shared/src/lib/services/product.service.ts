import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends RestService {
  // url: string = 'https://localhost:44365/api/v1/catalog';
  constructor(httpClient: HttpClient, @Inject('environment') private environment:any) {
    super(httpClient,environment.catalogApiEndpoint,'/api/v1/catalog')
  }

  getProducts(): Observable<Product[]> {
    return this.get<Product[]>('');
  }
}

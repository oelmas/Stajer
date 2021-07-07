import { Component } from '@angular/core';
import { ProductService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-panel';
  constructor(private productService:ProductService){
    this.productService.getProducts().subscribe(response =>console.log(response))
  }
}

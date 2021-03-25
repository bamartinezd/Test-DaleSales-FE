import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModel } from 'src/app/constants/route.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from "../../services/product.service";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productItems: ProductModel[]=[];
  public ROUTES = RouterModel.ROUTES;
  
  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void{
    this.getProducts();
  }

  public goToProductView(productId: number):void {
    this.route.navigate(['product',productId]);
  }

  private getProducts(): void {
    this.productService.getProducts()
    .subscribe((result) => {
      this.productItems = result;
      console.log(result);
    }, error => {
      console.error(error);
    });
  }

  public removeProduct(id: number):void {
    this.productService.deleteProduct(id)
    .pipe(finalize(()=>{
      this.getProducts();
    }))
    .subscribe(result => {
      console.log(result);
      
    });
  }

}

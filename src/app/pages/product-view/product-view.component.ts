import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  //public productForm: FormGroup;
  public product: ProductModel={
    id: 0,
    productName:"",
    unitValue:0
  };

  private productId: number=0;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = Number(params.productId);
    });

    this.getProduct();
  }

  public saveProduct(form: NgForm):void {
    const newProduct:ProductModel={
      id: this.product.id,
      productName: form.controls.productName.value,
      unitValue: form.controls.unitValue.value
    };
    if (this.productId===0) {
      this.createProduct(newProduct);
    }else{
      this.updateProduct(newProduct);
    }
  }

  private getProduct():void {
    if (this.productId !== 0) {
      this.productService.getProductById(this.productId)
      .subscribe(result=>{
        this.product = result;
        console.log(result);
      });    
    }
  }

  private createProduct(product: ProductModel):void {
    this.productService.saveProduct(product)
    .subscribe(result=>{
      console.log(result);
    });
  }

  private updateProduct(product: ProductModel):void {
    this.productService.updateProduct(product)
    .subscribe(result=>{
      console.log(result);
    });
  }

}

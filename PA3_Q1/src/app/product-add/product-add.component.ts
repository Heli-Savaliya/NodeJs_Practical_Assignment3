import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  angForm: FormGroup;
  constructor(private fp: FormBuilder,private route: ActivatedRoute,
    private router: Router,private ps: ProductService) 
  {
    this.angForm = this.fp.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      quantity: ['', Validators.required ]
    });

  }
  
  insertProduct()
  {
    this.ps.addProduct(this.angForm.value.name,parseInt(this.angForm.value.price),parseInt( this.angForm.value.quantity));
    this.router.navigate(['product']);  }
}

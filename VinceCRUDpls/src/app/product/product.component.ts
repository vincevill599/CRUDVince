import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }

    productObj: object = {};
    confirmationAlert:string = "A new record has been successfully Added!";
    addSuccess:boolean = false;

    addNewProduct = function(product){
      this.productObj = {
      "id": product.id,
      "name": product.name,
      "nationality": product.nationality
      }
      this.http.post("http://localhost:5555/products", this.productObj).subscribe(
        (res: Response) => {
          this.addSuccess = true;
        }
      )
    }
  ngOnInit() {
  }

}

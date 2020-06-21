import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute
  ) { }

  share(product) {
    this.route.paramMap.subscribe(params => {
      window.alert('The product '+product['name']+' has been shared!');
    });
  }
  onNotify(product) {
    window.alert('Too expensive? You will be notified when the '+product['name']+' goes on sale!');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
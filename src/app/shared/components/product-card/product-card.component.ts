import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {
  @Input() product: any;
  
  getRnking(rating: number): number[] {
    const starts = Math.round(rating);
    return Array(starts).fill(0);
  }

  constructor() { }

  ngOnInit() {}

}

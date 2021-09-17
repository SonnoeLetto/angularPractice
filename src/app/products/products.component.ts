import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  productTitle = 'Product List';
  imageWidth = 80;
  flag = false;
  // listFilter: string = 'cart';

  private _listFilter: string = 'cart';
  get listFilter():string {
    return this._listFilter
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterby: string) : Iproduct[] {
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) => product.name.toLocaleLowerCase().includes(filterby))
  }
  filteredProducts: Iproduct[] = []
  products: Iproduct[] = [
    {
      id: 1,
      name: 'shoes',
      code: 'gt-231323',
      evailable: true,
      price: 1500,
      rating: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuxUAsvcw9nGsWbd_pMav29_Q-r4RwYYUnw&usqp=CAU'
    },
    {
      id: 2,
      name: 't-shirt',
      code: 'ty-233223',
      evailable: false,
      price: 500,
      rating: 5,
      img: 'https://www.sunspel.com/media/catalog/product/cache/03b12fdd50976902097ccadd8ce5e14e/m/t/mtsh0001-whaa-1_2_1.jpg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    console.log('onInit')
    this.listFilter = 'cart'
  }

  onClick() {
    this.flag = !this.flag;
  }

}

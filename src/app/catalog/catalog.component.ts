import { Component, OnInit } from '@angular/core';
import GoodItem from '../model/gooditem';
import {GoodsService} from '../service/goods.service';
import MockCategory, {Category} from '../model/category';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
goods: GoodItem[];
currentitem: GoodItem;
page = 1;
pageSize = 6;
curcategory = 0;
categories: Category[];
  constructor(private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.categories = MockCategory.categories;
    this.goodsService.getItems().subscribe(goods => this.goods = goods);
  }

  setCategory(num){
    this.curcategory = num;
  }

  public setpageSize(num)
  {
    this.pageSize = num;
  }
  getCollectionSize(): number{
    switch (this.curcategory) {
      case 0:
       return  this.goods.length;
      default:  return this.getCategoryCount(this.curcategory);

    }
  }

  getCategoryCount(cat): number{
    let counter = 0;
    this.goods.forEach(item => { if (item.categoryId === cat){counter++; }});
    return counter;
  }


}

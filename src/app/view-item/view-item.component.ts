import { Component, OnInit } from '@angular/core';
import GoodItem from '../model/gooditem';
import {ActivatedRoute} from '@angular/router';
import {GoodsService} from '../service/goods.service';
import MockCategory, {Category} from '../model/category';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  gooditem: GoodItem;
  categories: Category[];
  constructor(private route: ActivatedRoute, private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.categories = MockCategory.categories;
    const id = this.route.snapshot.paramMap.get('id');
    this.goodsService.getItem(id).subscribe(item => this.gooditem = item);
  }

}

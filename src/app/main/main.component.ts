import {AfterContentInit, Component, DoCheck, OnInit} from '@angular/core';
import GoodItem from '../model/gooditem';
import {GoodsService} from '../service/goods.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
goods: GoodItem[];
//currentitems: GoodItem[];
  constructor(private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.goodsService.getSortedItems(4).subscribe(goods => this.goods = goods);
    //this.setcurrentItem();

  }



}

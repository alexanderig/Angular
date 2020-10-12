import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import GoodItem from '../model/gooditem';
import {ActivatedRoute} from '@angular/router';
import {GoodsService} from '../service/goods.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-del-item',
  templateUrl: './del-item.component.html',
  styleUrls: ['./del-item.component.css']
})
export class DelItemComponent implements OnInit {

  gooditem: GoodItem;
  constructor(private route: ActivatedRoute, private goodsService: GoodsService, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.goodsService.getItem(id).subscribe(item => this.gooditem = item);
  }

  @ViewChild('butback') but: ElementRef<HTMLElement>;
  ondelete(){
    this.goodsService.deleteItem(this.gooditem).subscribe(() => {const el: HTMLElement = this.but.nativeElement; el.click(); } );
  }
}

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoodsService} from '../service/goods.service';
import {Location} from '@angular/common';
import GoodItem from '../model/gooditem';
import {HttpClient, HttpEventType} from '@angular/common/http';
import MockCategory, {Category} from '../model/category';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  public progress: number;
  public message: string;
  public response: {retPath: ''};
  private serverURL =  'http://localhost:49866/';
  @Output() public onUploadFinished = new EventEmitter();
  gooditem: GoodItem;
  public categories: Category[];
  constructor(private route: ActivatedRoute, private goodsService: GoodsService, private location: Location, private http: HttpClient) { }

  ngOnInit(): void {
    this.categories = MockCategory.categories;
    const id = this.route.snapshot.paramMap.get('id');
    this.goodsService.getItem(id).subscribe(item => this.gooditem = item);
  }

  @ViewChild('butback') butt: ElementRef<HTMLElement>;
onsave(){
    this.goodsService.updateItem(this.gooditem).subscribe(() => {
      const elem: HTMLElement = this.butt.nativeElement; elem.click(); });
}

  public uploadFile = (files) => {
    if (files.length === 0){
      return;
    }

    const filesToUpload: File[] = files;
    const formData = new FormData();

    Array.from(filesToUpload).map((file, index) => {
      return formData.append('file' + index, file, file.name);
    });


    this.http.post(`${this.serverURL}api/upload`, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.gooditem.picURL = this.createImgPath(event.body);
          console.log(this.response.retPath);
          this.onUploadFinished.emit(event.body);
        }
      });

  }

  public createImgPath = (event) => {
  this.response = event;
  return `${this.serverURL}${this.response.retPath}`;
  }

}

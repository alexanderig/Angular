import {Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {GoodsService} from '../service/goods.service';
import GoodItem from '../model/gooditem';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import MockCategory, {Category} from '../model/category';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  constructor(private goodsService: GoodsService, private http: HttpClient) { }

  public progress: number;
public message: string;
public response: {retPath: ''};
private serverURL =  'http://localhost:49866/';
@Output() public onUploadFinished = new EventEmitter();

  gooditem: GoodItem;
  categories: Category[];

  @ViewChild('butback') butt: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.gooditem = new GoodItem();
    this.gooditem.picURL = '/assets/images/noimage.jpg';
    this.gooditem.categoryId = 1;
    this.categories = MockCategory.categories;
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

  // public onUploadImage = (files) => {
  //   this.goodsService.uploadFile(files);
  // }
  public createImgPath = (event) => {
    this.response = event;
    return `${this.serverURL}${this.response.retPath}`;
  }

  oncreate(){
    console.log(this.gooditem);
    this.goodsService.createItem(this.gooditem).subscribe(() => {
      const elem: HTMLElement = this.butt.nativeElement;
      elem.click();
    });
  }

}

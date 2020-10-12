import {EventEmitter, Injectable, Output} from '@angular/core';
import GoodItem from '../model/gooditem';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  // @Output() public onUploadFinished = new EventEmitter();
  // @Output() public progress = new EventEmitter<number>();
  // @Output() public message = new EventEmitter<string>();
  goods: GoodItem[];
  constructor(private httpClient: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private baseUrl = 'http://localhost:49866/api/gooditems';
  private handleError(err): Observable<any> {
    console.error(err);
    return of(undefined);
  }

  getItems(): Observable<GoodItem[]>{
    return this.httpClient
      .get<GoodItem[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  getItem(id): Observable<GoodItem>{
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<GoodItem>(url)
      .pipe(catchError(this.handleError));
  }

  updateItem(article: GoodItem): Observable<any>{
    const url = `${this.baseUrl}/${article.id}`;
    return this.httpClient.put(url, article, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  createItem(article: GoodItem): Observable<GoodItem>{
    return this.httpClient.post(this.baseUrl, article, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteItem(article: GoodItem | number): Observable<GoodItem>{
    const id = typeof article === 'number' ? article : article.id;
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<GoodItem>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getSortedItems(num): Observable<GoodItem[]>{
    const getsortUrl = this.baseUrl + `sort/${num}`;
    return this.httpClient.get(getsortUrl, this.httpOptions).pipe(catchError(this.handleError));
  }

  // public uploadFile(files) {
  //   if (files.length === 0){
  //     return;
  //   }
  //
  //   const filesToUpload: File[] = files;
  //   const formData = new FormData();
  //
  //   Array.from(filesToUpload).map((file, index) => {
  //     return formData.append('file' + index, file, file.name);
  //   });
  //
  //   const uploadUrl = this.baseUrl.substring(0, this.baseUrl.lastIndexOf('/'));
  //   console.log(uploadUrl);
  //   this.httpClient.post(`${uploadUrl}/upload`, formData, {reportProgress: true, observe: 'events'})
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         //this.progress = Math.round(100 * event.loaded / event.total);
  //         this.progress.emit(Math.round(100 * event.loaded / event.total));
  //       }
  //       else if (event.type === HttpEventType.Response) {
  //         //this.message = 'Upload success.';
  //         this.message.emit('Upload success');
  //         //this.response = event.body;
  //         //this.gooditem.picURL = this.createImgPath(this.response.retPath);
  //         //console.log(this.response.retPath);
  //         this.onUploadFinished.emit(event.body);
  //       }
  //     });
  //
  // }



  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'api/upload';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }


}



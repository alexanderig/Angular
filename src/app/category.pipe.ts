import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], filter: number): any {
    if (!value || !filter)
    {
      return value;
    }

    return value.filter(item => item.categoryId === filter);
  }

}

export class Category{
  id: number;
  name: string;
}

export default class MockCategory{
  static categories: Category[] = [
    {id: 1, name: 'Mobile Phones'},
    {id: 2, name: 'Headphones'}
  ];

}

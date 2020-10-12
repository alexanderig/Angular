import {Picture} from './picture';

export default class GoodItem{
  public id: number;
public name: string;
public description: string;
public price: number;
public picURL: string;
public date: Date;
public categoryId: number;
public pictures: Picture[];
}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IItem} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService {

  constructor() { }

  #itemsList = new BehaviorSubject<IItem[]>(this.getItems());

  get itemsList() {
    return this.#itemsList.asObservable();
  }

  addItem(item: Partial<IItem>) {
    console.log('Adding item', item);
    const newItem = {...item, id: this.#itemsList.value.length + 1, createdAt: new Date(), updatedAt: new Date()} as IItem;
    this.#itemsList.next([...this.#itemsList.value, newItem]);
  }

  getItems(): IItem[] {
    return [
      {id: 1, name: 'Item 1', color: 'red', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 1'},
      {id: 2, name: 'Item 2', color: 'green', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 2'},
      {id: 3, name: 'Item 3', color: 'blue', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 3'},
      {id: 4, name: 'Item 4', color: 'yellow', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 4'},
      {id: 5, name: 'Item 5', color: 'orange', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 5'},
    ];
  }

  updateItem(value: IItem) {
    const items = this.#itemsList.value;
    const index = items.findIndex(item => item.id === value.id);
    items[index] = value;
    this.#itemsList.next([...items]);
  }
}

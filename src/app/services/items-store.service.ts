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

  getItems(): IItem[] {
    return [
      {id: 1, name: 'Item 1', color: 'red', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 1'},
      {id: 2, name: 'Item 2', color: 'green', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 2'},
      {id: 3, name: 'Item 3', color: 'blue', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 3'},
      {id: 4, name: 'Item 4', color: 'yellow', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 4'},
      {id: 5, name: 'Item 5', color: 'orange', createdAt: new Date(), updatedAt: new Date(), createdBy: 'User 5'},
    ];
  }
}

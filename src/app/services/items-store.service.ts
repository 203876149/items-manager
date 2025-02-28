import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {IItem} from '../models/item.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService {

  constructor(private http: HttpClient) { }

  #itemsList = new BehaviorSubject<IItem[]>([]);

  get itemsList() {
    return this.#itemsList.asObservable();
  }

  addItem(item: Partial<IItem>) {
    console.log('Adding item', item);
    const newItem = {...item, id: this.#itemsList.value.length + 1, createdAt: new Date(), updatedAt: new Date()} as IItem;
    this.#itemsList.next([...this.#itemsList.value, newItem]);
  }

  initItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>('http://localhost:3000/items').pipe(
      tap(items => this.#itemsList.next(items))
    );
  }

  updateItem(value: IItem) {
    const items = this.#itemsList.value;
    const index = items.findIndex(item => item.id === value.id);
    items[index] = value;
    this.#itemsList.next([...items]);
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, switchMap, tap} from 'rxjs';
import {IItem} from '../models/item.model';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:3000/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService {

  constructor(private http: HttpClient) { }

  #itemsList = new BehaviorSubject<IItem[]>([]);

  isLoading = new BehaviorSubject<boolean>(true);

  get itemsList() {
    return this.#itemsList.asObservable();
  }

  initItems(): Observable<IItem[]> {
    this.isLoading.next(true);
    return this.http.get<IItem[]>(URL).pipe(
      tap(items => this.#itemsList.next(items)),
      tap(() => {
        setTimeout(() => this.isLoading.next(false), 500)
      })
    );
  }

  addItem(item: Partial<IItem>) {
    this.isLoading.next(true);
    const newItem = {...item} as IItem;
    return this.http.post(URL, newItem).pipe(
      switchMap(() => this.initItems())
    );
  }

  updateItem(item: IItem) {
    this.isLoading.next(true);
    return this.http.put(URL + `/${item.id}`, item).pipe(
      switchMap(() => this.initItems())
    );
  }
}

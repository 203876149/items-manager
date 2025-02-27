import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
  signal,
  ViewChild
} from '@angular/core';
import {ItemsStoreService} from '../../services/items-store.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {toSignal} from '@angular/core/rxjs-interop';
import {PageEvent} from '@angular/material/paginator';
import {IItem} from '../../models/item.model';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-items-view',
  standalone: false,
  templateUrl: './items-view.component.html',
  styleUrl: './items-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemsViewComponent {
  constructor() {}

  viewMode: 'table' | 'tile' = 'table';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  editItem: IItem | null = null;



  filter = model<string>('');

  itemsStoreService = inject(ItemsStoreService);

  itemsList = toSignal(this.itemsStoreService.itemsList);

  pagination = signal({pageSize: 10, pageIndex: 0});

  displayItems = computed(() => {
    return (this.itemsList()?.filter(item => !this.filter().length || item.name.toLowerCase().includes(this.filter().toLowerCase())) || [])
      .slice(this.pagination().pageIndex * this.pagination().pageSize, (this.pagination().pageIndex + 1) * this.pagination().pageSize);
  })

  ngOnInit() {
  }


  changeView($event: MatButtonToggleChange) {
    this.viewMode = $event.value;
  }

  setPagination($event: PageEvent) {
    this.pagination.set({pageSize: $event.pageSize, pageIndex: $event.pageIndex});
  }

  onEditItem($event: IItem) {
    this.editItem = $event;
    this.sidenav.toggle(true);
  }
}

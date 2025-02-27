import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ItemsStoreService} from '../../services/items-store.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

@Component({
  selector: 'app-items-view',
  standalone: false,
  templateUrl: './items-view.component.html',
  styleUrl: './items-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemsViewComponent {
  constructor(readonly itemsStoreService: ItemsStoreService) {}

  viewMode: 'table' | 'tile' = 'table';

  changeView($event: MatButtonToggleChange) {
    this.viewMode = $event.value;
  }
}

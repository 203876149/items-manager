import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {IItem} from '../../models/item.model';

@Component({
  selector: 'app-items-table',
  standalone: false,
  templateUrl: './items-table.component.html',
  styleUrl: './items-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent {

  itemsList = input.required<Array<IItem>>();
  displayedColumns = ['color', 'name', 'createdAt', 'updatedAt', 'createdBy', 'id'];
  @Output() editItem = new EventEmitter<IItem>();


  onEditItem(element: IItem) {
    this.editItem.emit(element);
  }
}

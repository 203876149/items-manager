import {Component, EventEmitter, input, Output} from '@angular/core';
import {IItem} from '../../models/item.model';

@Component({
  selector: 'app-items-tile',
  standalone: false,
  templateUrl: './items-tile.component.html',
  styleUrl: './items-tile.component.css'
})
export class ItemsTileComponent {
  itemsList = input.required<Array<IItem>>();
  breakpoint = 5;

  @Output() editItem = new EventEmitter<IItem>();


  ngOnInit() {
    this.onResize({target: {innerWidth: window.innerWidth}});
  }


  onResize(event: any) {
    this.breakpoint = +((event?.target?.['innerWidth']) / 300).toFixed(0);
  }

  onEditItem(element: IItem) {
    this.editItem.emit(element);
  }
}

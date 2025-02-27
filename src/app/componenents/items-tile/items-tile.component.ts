import {Component, input} from '@angular/core';
import {IItem} from '../../models/item.model';

@Component({
  selector: 'app-items-tile',
  standalone: false,
  templateUrl: './items-tile.component.html',
  styleUrl: './items-tile.component.css'
})
export class ItemsTileComponent {
  itemsList = input.required<Array<IItem>>();


  onResize($event: any) {

  }
}

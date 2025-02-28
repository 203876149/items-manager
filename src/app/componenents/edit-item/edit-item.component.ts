import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemsStoreService} from '../../services/items-store.service';
import {IItem} from '../../models/item.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-edit-item',
  standalone: false,
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditItemComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl<any>('', Validators.required),
    createdBy: new FormControl<any>('', Validators.required),
    color: new FormControl<any>('', Validators.required),
    description: new FormControl<any>('', Validators.required)
  });

  mode: 'create' | 'edit' = 'create';

  @Output() close = new EventEmitter<boolean>();
  @Input() set editItem(item: IItem | null) {
    if (item) {
      this.mode = 'edit';
      this.form.patchValue(item);
      this.#editItem = item;
    } else {
      this.mode = 'create';
      this.form.reset();
      this.#editItem = null;
    }
  }
  #editItem: IItem | null = null;

  constructor(private itemsStoreService: ItemsStoreService) {}

  onCancel() {
    this.close.emit(false);
  }

  onSubmit() {
    if (this.form.invalid) return;
    if (this.mode === 'create') {
      this.itemsStoreService.addItem(this.form.value).pipe(take(1)).subscribe();
    } else {
      this.itemsStoreService.updateItem({...this.#editItem, ...this.form.value}).pipe(take(1)).subscribe();
    }
    this.close.emit(true);
  }
}

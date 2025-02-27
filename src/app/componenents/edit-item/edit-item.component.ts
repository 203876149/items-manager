import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    userName: new FormControl<any>('', Validators.required),
    color: new FormControl<any>('', Validators.required),
    description: new FormControl<any>('', Validators.required)
  });

  @Output() close = new EventEmitter<boolean>();

  constructor() {}


  save() {
    // Save the item
  }

  protected readonly FormControl = FormControl;

  onCancel() {
    this.close.emit(false);
  }

  onSubmit() {
    console.log(this.form.value);
    this.close.emit(true);
  }
}

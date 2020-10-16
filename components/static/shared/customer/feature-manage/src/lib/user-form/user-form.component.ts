import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@workshop-nx/core/entities';

@Component({
  selector: 'customer-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  private _data: Partial<User>;
  public get data(): Partial<User> {
    return this._data;
  }

  @Input()
  public set data(value: Partial<User>) {
    this._data = value;
  }

  form = new FormGroup({
    _id: new FormControl(),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.min(18)),
  });

  @Output() submitted = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}

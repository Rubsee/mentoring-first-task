import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {User} from "../../interfaces/user.interface";
import {MatButton} from "@angular/material/button";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, NgIf, MatDialogClose, MatDialogTitle, MatDialogActions, MatButton],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User; isEdit: boolean }
  ) {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
      }),
    });
  }

  ngOnInit(): void {
    if (this.data.isEdit) {
      // Заполняем форму данными, если редактируем существующего пользователя
      this.form.patchValue(this.data.user);
    } else {
      // Генерируем новый id для нового пользователя
      const newId = this.usersService.generateNewId();
      this.form.patchValue({id: newId});
    }
  }

  onSave(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.dialogRef.close(this.form.value); // Передаём данные формы при закрытии
    }
  }

  onCancel(): void {
    this.dialogRef.close(null); // Закрываем диалог без изменений
  }
}

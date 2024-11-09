// import { Component, Inject, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
// import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
// import { User } from '../interfaces/user.interface';
// import {MatFormField, MatLabel} from "@angular/material/form-field";
// import {MatInput} from "@angular/material/input";
// import {MatButton} from "@angular/material/button";
//
// @Component({
//   selector: 'app-create-edit-user',
//   templateUrl: './create-edit-user.component.html',
//   imports: [
//     MatLabel,
//     MatFormField,
//     MatInput,
//     ReactiveFormsModule,
//     MatDialogActions,
//     MatButton,
//     MatDialogTitle
//   ],
//   standalone: true
// })
// export class CreateEditUserComponent implements OnInit {
//   form: FormGroup;
//
//   constructor(
//     private fb: FormBuilder,
//     private dialogRef: MatDialogRef<CreateEditUserComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: { user: User; isEdit: boolean }
//   ) {
//     this.form = this.fb.group({
//       id: [data.user?.id || null], // Поле id, если есть
//       name: [data.user?.name || '', Validators.required],
//       email: [data.user?.email || '', [Validators.required, Validators.email]],
//       phone: [data.user?.phone || '', Validators.required],
//       website: [data.user?.website || ''],
//
//       address: this.fb.group({
//         street: [data.user?.address?.street || ''],
//         suite: [data.user?.address?.suite || ''],
//         city: [data.user?.address?.city || ''],
//         zipcode: [data.user?.address?.zipcode || ''],
//       }),
//
//       geo: this.fb.group({
//         lat: [data.user?.geo?.lat || ''],
//         lng: [data.user?.geo?.lng || ''],
//       }),
//
//       company: this.fb.group({
//         name: [data.user?.company?.name || ''],
//         catchPhrase: [data.user?.company?.catchPhrase || ''],
//         bs: [data.user?.company?.bs || ''],
//       }),
//     });
//   }
//
//   ngOnInit(): void {}
//
//   onSave(): void {
//     if (this.form.valid) {
//       this.dialogRef.close(this.form.value); // Передаём данные формы при закрытии
//     }
//   }
//
//   onCancel(): void {
//     this.dialogRef.close(null); // Закрываем диалог без изменений
//   }
// }

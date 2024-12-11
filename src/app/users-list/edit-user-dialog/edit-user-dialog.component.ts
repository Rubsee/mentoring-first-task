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
import {MatButton} from "@angular/material/button";
import {EditUserDialogData} from "../../interfaces/editUserDialogData.interface";

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, NgIf, MatDialogClose, MatDialogTitle, MatDialogActions,
    MatButton],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent implements OnInit {
  readonly form: FormGroup = this.getUserFormGroup();


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: EditUserDialogData,
  ) {
  }

  private getUserFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
      }),
    })
  }

  private initFormValue(): void {
    const user = this.data.user;

    if (user) {
      this.form.patchValue(user);
    }
  }

  ngOnInit(): void {
    this.initFormValue();
  }

  onSave(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, isFormControl, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatDialogActions} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-action-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    NgIf,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './action-user-form.component.html',
  styleUrl: './action-user-form.component.scss'
})
export class ActionUserFormComponent {
  @Input() addUserForm!: FormGroup; // Форма передаётся через @Input
  @Output() close = new EventEmitter<void>(); // Событие закрытия
  @Output() save = new EventEmitter<void>();  // Событие сохранения

  onClose(): void {
    this.close.emit(); // Эмитим событие закрытия
  }

  afterClosed(): void {
    if (this.addUserForm.valid) {
      this.save.emit(); // Эмитим событие сохранения только если форма валидна
    }
  }

}

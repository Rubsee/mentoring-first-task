import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCardComponent} from "../user-card/user-card.component";
import {UsersService} from "../services/users.service";
import {User} from "../interfaces/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "./edit-user-dialog/edit-user-dialog.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  readonly userService = inject(UsersService);

  constructor(private dialog: MatDialog) {
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user)
  }

  onAddUser(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '600px',
      data: {user: {}, isEdit: false},
    });

    dialogRef.afterClosed().subscribe((result: User | null) => {
      if (result) {
        this.userService.createUser(result);
      }
    });
  }

  onEditUser(user: User): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '600px',
      data: {user, isEdit: true},

    });

    dialogRef.afterClosed().subscribe((result: User | null) => {
      if (result) {
        this.userService.editUser(result);
      }
    });
  }
}

import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCardComponent} from "../user-card/user-card.component";
// import {UsersService} from "../services/users.service";
import {User} from "../interfaces/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "./edit-user-dialog/edit-user-dialog.component";
import {select, Store} from "@ngrx/store";
import {UsersActions} from "./store/users.actions";
import {selectUsers} from "./store/users.selectors";

import {UsersApiService} from "../services/users-api.service";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  // readonly userService = inject(UsersService);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);
  readonly userApiService = inject(UsersApiService);

  constructor(private dialog: MatDialog) {
    // this.userApiService.getUsers().subscribe((users: User[]) => {
    //   this.store.dispatch(UsersActions.set({users: users}));
    // });
    this.store.dispatch(UsersActions.loadUsers());
  }

  deleteUser(user: User) {
    // this.userService.deleteUser(user)
    this.store.dispatch(UsersActions.delete({user}));
  }

  onAddUser(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '600px',
      data: {user: {}, isEdit: false},
    });

    dialogRef.afterClosed().subscribe((result: User | null) => {
      if (result) {
        // this.userService.createUser(result);
        this.store.dispatch(UsersActions.create({
          user: {
            id: new Date().getTime(),
            name: '',
            email: '',
            address: result.address,
            geo: result.geo,
            phone: '',
            website: '',
            company: result.company,
          }
        }))
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
        // this.userService.editUser(result);
        this.store.dispatch(UsersActions.edit({editedUser: result}));
      }
    });
  }

  protected readonly selectUsers = selectUsers;
}

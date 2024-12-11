import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCardComponent} from "../user-card/user-card.component";
import {User} from "../interfaces/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "./edit-user-dialog/edit-user-dialog.component";
import {Store} from "@ngrx/store";
import {UsersActions} from "./store/users.actions";
import {selectUsers} from "./store/users.selectors";
import {EditUserDialogData} from "../interfaces/editUserDialogData.interface";

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [UserCardComponent, CommonModule],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUsers);

    constructor(private dialog: MatDialog) {
        this.store.dispatch(UsersActions.loadUsers());
    }

    deleteUser(user: User) {
        this.store.dispatch(UsersActions.delete({user}));
    }

    onAddUser(): void {
        const dialogRef =
            this.dialog.open<EditUserDialogComponent, EditUserDialogData, User | null>(EditUserDialogComponent, {
                width: '600px',
                data: {isEdit: false},
            });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.store.dispatch(UsersActions.create({
                    user: {
                        id: new Date().getTime(),
                        name: result.name,
                        email: result.email,
                        address: result.address,
                        geo: result.geo,
                        phone: result.phone,
                        website: result.website,
                        company: result.company,
                    }
                }))
            }
        });
    }

    onEditUser(user: User): void {
        const dialogRef = this.dialog.open<EditUserDialogComponent, EditUserDialogData, User | null>
        (EditUserDialogComponent, {
            width: '600px',
            data: {user, isEdit: true},

        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.store.dispatch(UsersActions.edit({editedUser: result}));
            }
        });
    }
}

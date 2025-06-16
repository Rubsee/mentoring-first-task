import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';
import { AppError } from '../../interfaces/appError.interface';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    set: props<{ users: User[] }>(),
    edit: props<{ editedUser: User }>(),
    create: props<{ user: User }>(),
    delete: props<{ user: User }>(),
    init: props<{ users: User[] }>(),

    loadUsers: emptyProps(),
    loadUsersSuccess: props<{ users: User[] }>(),
    loadUsersFailure: props<{ error: AppError | null }>(),
  },
});

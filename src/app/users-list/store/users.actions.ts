import {createAction, createActionGroup, emptyProps, props} from "@ngrx/store";
import {User} from "../../interfaces/user.interface";

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'set': props<{ users: User[] }>(),
    'edit': props<{ editedUser: User }>(),
    'create': props<{ user: User }>(),
    'delete': props<{ user: User }>(),
    'init': props<{ users: User[] }>(),
    'generateNewId': emptyProps(),

    'loadUsers': emptyProps(),
    'fetchSuccess': props<{ users: User[] }>(),
    'fetchFailure': props<{ error: any }>(),
  }
});

import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { LoadingStatus } from '../../enums/loading-status.enum';
import { UsersReducerState } from '../../interfaces/usersReducerState.interface';

const initialState: UsersReducerState = {
  users: [],
  error: null,
  loadingStatus: LoadingStatus.ERROR,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.set, (state, { users }) => ({
    ...state,
    users: users,
  })),
  on(UsersActions.edit, (state, { editedUser }) => ({
    ...state,
    users: state.users.map((user) =>
      user.id === editedUser.id ? editedUser : user,
    ),
  })),
  on(UsersActions.create, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(UsersActions.delete, (state, { user }) => ({
    ...state,
    users: state.users.filter((users) => users.id !== user.id),
  })),
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loadingStatus: LoadingStatus.LOADED,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loadingStatus: LoadingStatus.ERROR,
    error: null,
  })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loadingStatus: LoadingStatus.ERROR,
    error,
  })),
);

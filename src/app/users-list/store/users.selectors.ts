import { createSelector } from '@ngrx/store';
import { UserState } from '../../interfaces/userState.interface';

interface AppState {
  users: UserState;
}

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UserState) => state.users,
);

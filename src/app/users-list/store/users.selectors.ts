import { createSelector } from '@ngrx/store';
import { UsersSelectorState } from '../../interfaces/usersSelectorState.interface';

interface AppState {
  users: UsersSelectorState;
}

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersSelectorState) => state.users,
);

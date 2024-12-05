import {createReducer, on} from "@ngrx/store";
import {UsersActions} from "./users.actions";
import {User} from "../../interfaces/user.interface";

const initialState: { users: User[], error: any, loading: boolean } = {
  users: [],
  error: null,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.set, (state, payload) => ({
    ...state,
    users: payload.users
  })),
  on(UsersActions.edit, (state, payload) => ({
    ...state,
    users: state.users.map((user) => {
      if (user.id === payload.editedUser.id) {
        return payload.editedUser;
      } else {
        return user;
      }
    })
  })),
  on(UsersActions.create, (state, payload) => ({
    ...state,
    users: [...state.users, payload.user],
  })),
  on(UsersActions.delete, (state, payload) => ({
    ...state,
    users: state.users.filter((user) => user.id !== payload.user.id),
  })),
  on(UsersActions.generateNewId, (state) => {
    const maxId = state.users.length ? Math.max(...state.users.map(user => user.id)) : 0;
    return {
      ...state,
      newId: maxId + 1, // Генерация нового ID
    };
  }),
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UsersActions.fetchSuccess, (state, {users}) => ({
    ...state,
    users,
    loading: false,
    error: null,
  })),
  on(UsersActions.fetchFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error,
  }))
);


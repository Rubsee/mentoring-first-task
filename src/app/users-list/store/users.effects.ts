import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {UsersApiService} from "../../services/users-api.service";
import {UsersActions} from "./users.actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";

export const loadUsers = createEffect(() => {
  const actions$ = inject(Actions);
  const apiService = inject(UsersApiService);

  return actions$.pipe(
    ofType(UsersActions.loadUsers),
    tap(() => console.log('Effect triggered: loadUsers')),
    mergeMap(() => {
      return apiService.getUsers().pipe(
        tap((users) => console.log('API response: ', users)),
        map((users) => {
          return UsersActions.loadUsersSuccess({users});
        }),
        catchError((error) => {
          console.error('API error: ', error);
          return of(UsersActions.loadUsersFailure({error}));
        })
      );
    })
  );
}, {functional: true});

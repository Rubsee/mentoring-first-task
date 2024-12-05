// import {inject, Injectable} from "@angular/core";
// import {BehaviorSubject} from "rxjs";
// import {User} from "../interfaces/user.interface";
// import {UsersApiService} from "./users-api.service";
// import {LocalStorageUsersService} from "../localstorage/localstorage.component";
//
// @Injectable({
//   providedIn: 'root',
// })
// export class UsersService {
//   private usersApiService = inject(UsersApiService);
//   private localStorageService = inject(LocalStorageUsersService);
//
//   private usersSubject$ = new BehaviorSubject<User[]>([]);
//   // users$ = this.usersSubject$.asObservable();
//
//   // constructor() {
//   //   this.initUsers()
//   // }
//
//   // private initUsers(): void {
//   //   const users = this.localStorageService.getUsers();
//   //   if (users) {
//   //     this.setUsers(users);
//   //   } else {
//   //     this.fetchUsersFromBackend()
//   //   }
//   // }
//
//   // private fetchUsersFromBackend(): void {
//   //   this.usersApiService.getUsers().subscribe(
//   //     (users: User[]) => {
//   //       this.setUsers(users);
//   //     },
//   //     error => {
//   //       console.error("Ошибка загрузки данных с бэкенда", error);
//   //     }
//   //   );
//   // }
//
//   // generateNewId(): number {
//   //   const users = this.usersSubject$.value;
//   //   const maxId = users.length ? Math.max(...users.map(user => user.id)) : 0;
//   //   return maxId + 1;
//   // }
//
//   // setUsers(users: User[]) {
//   //   this.usersSubject$.next(users);
//   //   this.localStorageService.setUsers(users);
//   // }
//
//   // editUser(editedUser: User) {
//   //   const updatedUsers = this.usersSubject$.value.map(user =>
//   //     user.id === editedUser.id ? {...user, ...editedUser} : user
//   //   );
//   //   this.setUsers(updatedUsers);
//   //   this.usersSubject$.next(updatedUsers);
//   // }
//   //
//   //
//   // createUser(user: User) {
//   //   const newUser = {...user, id: this.generateNewId()};
//   //   const updatedUsers = [...this.usersSubject$.value, user];
//   //   this.setUsers(updatedUsers);
//   // }
//   //
//   // deleteUser(user: User) {
//   //   const updatedUsers = this.usersSubject$.value.filter(item => item.id !== user.id);
//   //   this.setUsers(updatedUsers);
//   // }
// }

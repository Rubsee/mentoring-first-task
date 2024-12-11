import {HttpClient} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import {User} from "../interfaces/user.interface";

@Injectable({providedIn: "root"})
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers() {
    console.log('start')
    return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}

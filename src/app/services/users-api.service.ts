import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  private readonly apiService = inject(HttpClient);

  getUsers() {
    return this.apiService.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
    );
  }
}

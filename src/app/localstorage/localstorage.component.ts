import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageUsersService {
  private readonly STORAGE_KEY = 'users';

  public getUsers(): User[] | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? (JSON.parse(data) as User[]) : null;
  }

  public setUsers(users: User[]): void {
    const data = JSON.stringify(users);
    localStorage.setItem(this.STORAGE_KEY, data);
  }

  public removeUsers(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

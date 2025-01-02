import { User } from './user.interface';

export interface UsersSelectorState {
  users: User[];
  error?: any;
}

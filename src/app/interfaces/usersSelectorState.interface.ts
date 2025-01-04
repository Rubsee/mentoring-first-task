import { User } from './user.interface';
import { AppError } from './appError.interface';

export interface UsersSelectorState {
  users: User[];
  error?: AppError | null;
}

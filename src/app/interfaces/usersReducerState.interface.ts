import { User } from './user.interface';
import { LoadingStatus } from '../enums/loading-status.enum';
import { AppError } from './appError.interface';

export interface UsersReducerState {
  users: User[];
  error: AppError | null;
  loadingStatus: LoadingStatus;
}

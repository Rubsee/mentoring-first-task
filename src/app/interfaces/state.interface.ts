import {User} from "./user.interface";
import {LoadingStatus} from "../enums/loading-status.enum";

export interface State {
  users: User[],
  error: any,
  loadingStatus: LoadingStatus
}

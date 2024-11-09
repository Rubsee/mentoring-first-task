import {Component, EventEmitter, Input, Output} from "@angular/core";
import {User} from "../interfaces/user.interface";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input({required: true}) user!: User;
  @Output() deleteUser = new EventEmitter<User>();

  @Output() editUser = new EventEmitter<User>();

  onDelete() {
    this.deleteUser.emit(this.user);
  }

  onEdit(): void {
    this.editUser.emit(this.user);
  }
}

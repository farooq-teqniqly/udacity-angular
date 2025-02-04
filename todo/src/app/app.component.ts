import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TaskListComponent } from "./task-list/task-list.component";
import { User } from "./models";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, UserComponent, TaskListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<User | undefined>(undefined);

  constructor(private userService: UserService) {}

  onSelectUser(userId: string) {
    const user = this.userService.getUser(userId);
    this.selectedUser.set(user ?? undefined);
  }
}

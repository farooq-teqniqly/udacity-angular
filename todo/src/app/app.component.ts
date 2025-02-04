import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
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
  users: User[] = [];
  selectedUser = signal<User | undefined>(undefined);

  constructor(private userService: UserService) {
    this.users = this.userService.getAllUsers();
  }

  onSelectUser(userId: string) {
    const user = this.userService.getUser(userId);
    this.selectedUser.set(user ?? undefined);
  }
}

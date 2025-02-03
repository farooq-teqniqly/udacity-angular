import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS, User } from "./dummy-users";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, UserComponent, TaskListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<User | undefined>(undefined);

  onSelectUser(id: string) {
    const user = DUMMY_USERS.find((user) => user.id === id);
    this.selectedUser.set(user ?? undefined);
  }
}

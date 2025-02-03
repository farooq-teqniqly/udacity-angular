import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, UserComponent, TaskListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName = signal<string>("");

  onSelectUser(id: string) {
    const userName = DUMMY_USERS.find((user) => user.id === id)?.name;
    this.selectedUserName.set(userName ?? "");
  }
}

import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName = signal<string | null>(null);

  onSelectUser(id: string) {
    const userName = DUMMY_USERS.find((user) => user.id === id)?.name;
    this.selectedUserName.set(userName ?? null);
  }
}

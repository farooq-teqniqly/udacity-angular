import { Component, signal, computed } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { NgOptimizedImage } from "@angular/common";

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);
const randomUser = () => DUMMY_USERS[randomIndex()];

@Component({
  selector: "app-user",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  selectedUser = signal(randomUser());
  imagePath = computed(() => "assets/users/" + this.selectedUser().avatar);
  name = computed(() => this.selectedUser().name);

  onSelectUser() {
    this.selectedUser.set(randomUser());
  }
}

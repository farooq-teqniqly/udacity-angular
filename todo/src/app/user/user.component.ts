import { Component, input, computed, output } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { User } from "../models";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  user = input.required<User>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  selected = input.required<boolean>();
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}

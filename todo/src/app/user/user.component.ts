import { Component, input, computed, output } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => `assets/users/${this.avatar()}`);
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.id());
  }
}

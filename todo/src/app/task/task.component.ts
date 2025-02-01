import { Component, input } from "@angular/core";

@Component({
  selector: "app-task",
  standalone: true,
  imports: [],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  userName = input.required<string | null>();
}

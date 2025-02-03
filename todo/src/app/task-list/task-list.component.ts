import { Component, input } from "@angular/core";
import { TaskComponent } from "../task/task.component";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [TaskComponent],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent {
  userName = input.required<string>();
}

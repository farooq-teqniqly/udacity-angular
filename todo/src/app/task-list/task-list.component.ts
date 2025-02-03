import { Component, computed, input, signal } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [TaskComponent],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  tasks = signal(DUMMY_TASKS);

  selectedUserTasks = computed(() =>
    this.tasks().filter((task) => task.userId === this.userId())
  );

  onTaskComplete(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }
}

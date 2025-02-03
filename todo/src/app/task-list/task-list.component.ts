import { Component, computed, input, signal } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTaskComponent } from "../new-task/new-task.component";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  tasks = signal(DUMMY_TASKS);
  isAddingTask = false;

  selectedUserTasks = computed(() =>
    this.tasks().filter((task) => task.userId === this.userId())
  );

  onTaskComplete(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }

  onBeginNewTask() {
    this.isAddingTask = true;
  }

  onCancelNewTask() {
    this.isAddingTask = false;
  }
}

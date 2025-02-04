import { Component, computed, input } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { NewTask } from "../models";
import { TaskService } from "../services/task.service";

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
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  selectedUserTasks = computed(() =>
    this.taskService.getUserTasks(this.userId())()
  );

  onTaskComplete(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onBeginNewTask() {
    this.isAddingTask = true;
  }

  onCancelNewTask() {
    this.isAddingTask = false;
  }

  onAddNewTask(newTask: NewTask) {
    this.taskService.addTask(newTask, this.userId());
    this.isAddingTask = false;
  }
}

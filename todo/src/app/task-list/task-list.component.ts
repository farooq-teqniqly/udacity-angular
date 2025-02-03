import { Component, computed, input } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { Task } from "../models";

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

  selectedUserTasks = computed(() =>
    this.tasks.filter((task) => task.userId === this.userId())
  );

  tasks: Task[] = [
    {
      id: "1",
      userId: "u1",
      title: "Task 1",
      summary: "Task 1 summary",
      dueDate: new Date("2025-02-10"),
    },
    {
      id: "2",
      userId: "u1",
      title: "Task 2",
      summary: "Task 2 summary",
      dueDate: new Date("2025-02-06"),
    },
    {
      id: "3",
      userId: "u2",
      title: "Task 3",
      summary: "Task 3 summary",
      dueDate: new Date("2025-02-06"),
    },
    {
      id: "4",
      userId: "u3",
      title: "Task 4",
      summary: "Task 4 summary",
      dueDate: new Date("2025-02-05"),
    },
  ];
}

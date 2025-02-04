import { NewTask, Task } from "../models";
import { computed, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TaskService {
  private tasks = signal<Task[]>([
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
  ]);

  getUserTasks(userId: string) {
    return computed(() =>
      this.tasks().filter((task) => task.userId === userId)
    );
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.update((tasks) => [
      {
        ...newTask,
        userId,
        id: crypto.randomUUID(),
      },
      ...tasks,
    ]);
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }
}

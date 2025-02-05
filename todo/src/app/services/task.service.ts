import { NewTask, Task } from "../models";
import { computed, Injectable, signal } from "@angular/core";

const LOCAL_STORAGE_KEY = "todo-tasks";

@Injectable({ providedIn: "root" })
export class TaskService {
  private readonly tasks = signal<Task[]>([
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

  constructor() {
    const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (tasks) {
      this.tasks = signal<Task[]>(JSON.parse(tasks));
    }
  }

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

    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.tasks()));
  }
}

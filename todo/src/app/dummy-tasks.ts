import { Task } from "./models";

export const DUMMY_TASKS: Task[] = [
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

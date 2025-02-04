import { Component, input, output } from "@angular/core";
import { Task } from "../models";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-task",
  imports: [DatePipe],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}

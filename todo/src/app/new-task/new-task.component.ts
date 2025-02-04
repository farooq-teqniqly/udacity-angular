import { Component, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTask } from "../models";

@Component({
  selector: "app-new-task",
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  cancelNewTask = output();
  newTask = output<NewTask>();
  enteredTitle = signal("");
  enteredSummary = signal("");
  enteredDate = signal("");

  onCancel() {
    this.cancelNewTask.emit();
  }

  onSubmit() {
    this.newTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: new Date(this.enteredDate()),
    });
  }
}

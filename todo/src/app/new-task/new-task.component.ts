import { Component, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-task",
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  cancelNewTask = output();
  enteredTitle = signal("");
  enteredSummary = signal("");
  enteredDate = signal("");

  onCancel() {
    this.cancelNewTask.emit();
  }

  onSubmit() {
    console.log({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    });
  }
}

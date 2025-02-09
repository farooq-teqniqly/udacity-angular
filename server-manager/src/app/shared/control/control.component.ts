import { Component, input } from "@angular/core";

@Component({
  selector: "app-control",
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
})
export class ControlComponent {
  inputId = input.required<string>();
  label = input.required<string>();
}

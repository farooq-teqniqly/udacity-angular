import { Component, input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-control",
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
  },
})
export class ControlComponent {
  inputId = input.required<string>();
  label = input.required<string>();
}

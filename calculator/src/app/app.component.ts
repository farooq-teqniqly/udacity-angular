import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CalculatorFormComponent } from "./calculator-form/calculator-form.component";
import { CalculatorResultComponent } from "./calculator-result/calculator-result.component";

@Component({
  selector: "app-root",
  imports: [
    HeaderComponent,
    CalculatorFormComponent,
    CalculatorResultComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}

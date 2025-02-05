import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CalculatorFormComponent } from "./calculator-form/calculator-form.component";
import { InvestProjectionTableComponent } from "./invest-projection-table/invest-projection-table.component";

@Component({
  selector: "app-root",
  imports: [
    HeaderComponent,
    CalculatorFormComponent,
    InvestProjectionTableComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  projectionTable = 100;

  onResultCalculated(result: number) {
    this.projectionTable = result;
  }
}

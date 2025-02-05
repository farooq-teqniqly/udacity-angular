import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CalculatorFormComponent } from "./calculator-form/calculator-form.component";
import { InvestProjectionTableComponent } from "./invest-projection-table/invest-projection-table.component";
import { InvestmentProjectionTableRow } from "./invest-projection-table/investment-projection-table-row";

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
  projectionTable: InvestmentProjectionTableRow[] = [];

  onResultCalculated(
    investmentProjectionTable: InvestmentProjectionTableRow[]
  ) {
    this.projectionTable = investmentProjectionTable;
  }
}

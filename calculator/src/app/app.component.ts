import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CalculatorFormComponent } from "./calculator-form/calculator-form.component";
import { InvestProjectionTableComponent } from "./invest-projection-table/invest-projection-table.component";
import { InvestmentProjectionTableRow } from "./invest-projection-table/investment-projection-table-row";
import { CalculationParameters } from "./calculator-form/calculation-parameters.model";
import { CalculatorService } from "./calculator.service";

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
  atLeastOneCalculation = signal(false);
  projectionTable = signal<InvestmentProjectionTableRow[]>([]);

  constructor(private calculatorService: CalculatorService) {}

  calculateProjectionTable(calculationParameters: CalculationParameters) {
    this.projectionTable.set(
      this.calculatorService.calculateInvestmentProjectionTable(
        calculationParameters
      )
    );

    this.atLeastOneCalculation.set(true);
  }
}

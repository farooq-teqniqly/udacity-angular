import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalculatorService } from "../calculator.service";
import { InvestmentProjectionTableRow } from "../invest-projection-table/investment-projection-table-row";

@Component({
  selector: "app-calculator-form",
  imports: [FormsModule],
  templateUrl: "./calculator-form.component.html",
  styleUrl: "./calculator-form.component.css",
})
export class CalculatorFormComponent {
  initialInvestmentRange: [number, number] = [1000, 100000];
  annualInvestmentRange: [number, number] = [100, 10000];
  expectedReturnRange: [number, number] = [1, 20];
  durationRange: [number, number] = [1, 20];

  initialInvestment: number = this.initialInvestmentRange[0];
  annualInvestment: number = this.annualInvestmentRange[0];
  expectedReturn: number = this.expectedReturnRange[0];
  duration: number = this.durationRange[0];

  calculationResult = output<InvestmentProjectionTableRow[]>();

  constructor(private calculatorService: CalculatorService) {}

  onCalculate() {
    const investmentProjectionTable =
      this.calculatorService.calculateInvestmentProjectionTable({
        initialInvestment: this.initialInvestment,
        annualInvestment: this.annualInvestment,
        expectedReturn: this.expectedReturn,
        duration: this.duration,
      });

    this.calculationResult.emit(investmentProjectionTable);
  }
}

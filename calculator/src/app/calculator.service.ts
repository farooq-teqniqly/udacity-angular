import { Injectable } from "@angular/core";
import { CalculationParameters } from "./calculator-form/calculation-parameters.model";
import { InvestmentProjectionTableRow } from "./invest-projection-table/investment-projection-table-row";

@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  calculateInvestmentProjectionTable(
    calculationParameters: CalculationParameters
  ): InvestmentProjectionTableRow[] {
    const table = [];
    let investmentValue = calculationParameters.initialInvestment;
    let totalInterest = 0;

    for (let year = 1; year <= calculationParameters.duration; year++) {
      const interestAmount =
        investmentValue * (calculationParameters.expectedReturn / 100);
      totalInterest += interestAmount;
      const investmentCapital =
        investmentValue +
        interestAmount +
        calculationParameters.annualInvestment;

      table.push({
        year,
        investmentValue,
        interestAmount,
        totalInterest,
        investmentCapital,
      });

      investmentValue = investmentCapital;
    }

    return table;
  }
}

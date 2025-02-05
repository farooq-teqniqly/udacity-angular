import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalculationParameters } from "./calculation-parameters.model";

@Component({
  selector: "app-calculator-form",
  imports: [FormsModule],
  templateUrl: "./calculator-form.component.html",
  styleUrl: "./calculator-form.component.css",
})
export class CalculatorFormComponent {
  initialInvestment = 1000;
  annualInvestment = 1000;
  expectedReturn = 5.5;
  duration = 10;

  formData = output<CalculationParameters>();

  onSubmit() {
    this.formData.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}

import { Component, input } from "@angular/core";
import { InvestmentProjectionTableRow } from "./investment-projection-table-row";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-invest-projection-table",
  imports: [CurrencyPipe],
  templateUrl: "./invest-projection-table.component.html",
  styleUrl: "./invest-projection-table.component.css",
})
export class InvestProjectionTableComponent {
  table = input.required<InvestmentProjectionTableRow[]>();
}

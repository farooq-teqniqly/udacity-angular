import { Component, input } from "@angular/core";
import { OptimizedImageComponent } from "../optimized-image/optimized-image.component";
import { ImageSpec } from "../optimized-image/image-spec.model";

@Component({
  selector: "app-dashboard-item",
  imports: [OptimizedImageComponent],
  templateUrl: "./dashboard-item.component.html",
  styleUrl: "./dashboard-item.component.css",
})
export class DashboardItemComponent {
  imageSpec = input.required<ImageSpec>();
  title = input.required<string>();
}

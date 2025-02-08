import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { ImageSpec } from "./image-spec.model";

@Component({
  selector: "app-optimized-image",
  imports: [NgOptimizedImage],
  templateUrl: "./optimized-image.component.html",
  styleUrl: "./optimized-image.component.css",
})
export class OptimizedImageComponent {
  imageSpec = input.required<ImageSpec>();
  isPriority = input<boolean>(false);
}

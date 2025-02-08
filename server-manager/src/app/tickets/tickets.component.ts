import { Component } from "@angular/core";
import { OptimizedImageComponent } from "../optimized-image/optimized-image.component";
import { ImageSpec } from "../optimized-image/image-spec.model";

@Component({
  selector: "app-tickets",
  imports: [OptimizedImageComponent],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
})
export class TicketsComponent {
  imageSpec: ImageSpec = {
    path: "/list.png",
    height: 315,
    width: 250,
    altText: "A list of items",
  };
}

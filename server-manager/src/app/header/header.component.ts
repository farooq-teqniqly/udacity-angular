import { Component } from "@angular/core";
import { OptimizedImageComponent } from "../optimized-image/optimized-image.component";
import { ImageSpec } from "../optimized-image/image-spec.model";

@Component({
  selector: "app-header",
  imports: [OptimizedImageComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  imageSpec: ImageSpec = {
    path: "/logo.png",
    height: 397,
    width: 280,
    altText: "Website logo, a server",
  };
}

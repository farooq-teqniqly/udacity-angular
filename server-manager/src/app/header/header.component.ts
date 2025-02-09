import { Component } from "@angular/core";
import { OptimizedImageComponent } from "../optimized-image/optimized-image.component";
import { ImageSpec } from "../optimized-image/image-spec.model";
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: "app-header",
  imports: [OptimizedImageComponent, ButtonComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  imageSpec: ImageSpec = {
    path: "/logo.png",
    height: 64,
    width: 45,
    altText: "Website logo, a server",
  };
}

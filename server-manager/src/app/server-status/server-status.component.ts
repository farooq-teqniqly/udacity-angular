import { Component } from "@angular/core";
import { OptimizedImageComponent } from "../optimized-image/optimized-image.component";
import { ImageSpec } from "../optimized-image/image-spec.model";

@Component({
  selector: "app-server-status",
  imports: [OptimizedImageComponent],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent {
  currentStatus = "online";

  imageSpec: ImageSpec = {
    path: "/status.png",
    height: 262,
    width: 400,
    altText: "A signal symbol",
  };
}

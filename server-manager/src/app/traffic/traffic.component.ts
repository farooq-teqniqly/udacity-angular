import { Component } from "@angular/core";
import { OptimizedImageComponent } from "../optimized-image/optimized-image.component";
import { ImageSpec } from "../optimized-image/image-spec.model";

@Component({
  selector: "app-traffic",
  imports: [OptimizedImageComponent],
  templateUrl: "./traffic.component.html",
  styleUrl: "./traffic.component.css",
})
export class TrafficComponent {
  imageSpec: ImageSpec = {
    path: "/globe.png",
    height: 289,
    width: 300,
    altText: "A globe",
  };

  dummyTrafficData = [
    {
      id: "d1",
      value: 433,
    },
    {
      id: "d2",
      value: 260,
    },
    {
      id: "d3",
      value: 290,
    },
    {
      id: "d4",
      value: 410,
    },
    {
      id: "d5",
      value: 397,
    },
    {
      id: "d6",
      value: 488,
    },
    {
      id: "d47",
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}

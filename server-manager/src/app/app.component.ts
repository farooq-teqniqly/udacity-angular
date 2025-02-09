import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";
import { ImageSpec } from "./optimized-image/image-spec.model";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {
  serverStatusImageSpec: ImageSpec = {
    path: "/status.png",
    height: 262,
    width: 400,
    altText: "A signal symbol",
  };

  trafficImageSpec = {
    path: "/globe.png",
    height: 289,
    width: 300,
    altText: "A globe",
  };

  ticketsImageSpec = {
    path: "/list.png",
    height: 315,
    width: 250,
    altText: "A list of items",
  };
}

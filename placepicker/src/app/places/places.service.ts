import { Injectable, signal } from "@angular/core";

import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loadAvailablePlaces() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loadUserPlaces() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  addPlaceToUserPlaces(place: Place) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  removeUserPlace(place: Place) {}
}

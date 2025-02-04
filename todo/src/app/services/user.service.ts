import { computed, Injectable, signal } from "@angular/core";
import { User } from "../models";

@Injectable({ providedIn: "root" })
export class UserService {
  private users = signal<User[]>([
    {
      id: "u1",
      name: "Jasmine Washington",
      avatar: "user-1.jpg",
    },
    {
      id: "u2",
      name: "Emily Thompson",
      avatar: "user-2.jpg",
    },
    {
      id: "u3",
      name: "Marcus Johnson",
      avatar: "user-3.jpg",
    },
    {
      id: "u4",
      name: "David Miller",
      avatar: "user-4.jpg",
    },
    {
      id: "u5",
      name: "Priya Patel",
      avatar: "user-5.jpg",
    },
    {
      id: "u6",
      name: "Arjun Singh",
      avatar: "user-6.jpg",
    },
  ]);

  getAllUsers() {
    return computed(() => this.users());
  }

  getUser(userId: string) {
    return computed(() => this.users().find((user) => user.id === userId));
  }
}

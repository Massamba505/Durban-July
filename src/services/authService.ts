export interface User {
  email: string;
  name: string;
}

export class AuthService {
  private static currentUser: User | null = null;

  static login(email: string): User {
    // Extract name from email (before @)
    const name = email.split("@")[0].replace(".", " ");

    const user: User = {
      email,
      name: name
        .split(" ")
        .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
        .join(" "),
    };

    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }

  static logout(): void {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  }

  static getCurrentUser(): User | null {
    if (this.currentUser) {
      return this.currentUser;
    }

    const stored = localStorage.getItem("currentUser");
    if (stored) {
      this.currentUser = JSON.parse(stored);
      return this.currentUser;
    }

    return null;
  }

  static isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}

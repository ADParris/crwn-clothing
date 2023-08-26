export interface User {
  createdAt: Date;
  displayName: string;
  email: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

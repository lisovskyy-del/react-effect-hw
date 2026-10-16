export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  company: Company
}

export type UserFormData = Omit<User, 'id'>

export type UserAction =
  | { type: "SET_USERS"; payload: User[] }
  | { type: "ADD_USER"; payload: User }
  | { type: "DELETE_USER"; payload: number }

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  username: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, email: string, password: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    const savedUsername = localStorage.getItem("auth_user");

    if (savedUsers) setUsers(JSON.parse(savedUsers));

    if (savedUsername) {
      setUsername(savedUsername);
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  const register = (username: string, email: string, password: string) => {
    const exists = users.find(
      (u) => u.username === username || u.email === email
    );
    if (exists) return false;

    const updatedUsers = [...users, { username, email, password }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return true;
  };

  const login = (username: string, password: string) => {
    const user = users.find(
      (u) =>
        (u.username === username || u.email === username) &&
        u.password === password
    );

    if (!user) return false;

    setUsername(user.username);
    setIsAuthenticated(true);
    localStorage.setItem("auth_user", user.username);
    return true;
  };

  const logout = () => {
    setUsername(null);
    setIsAuthenticated(false);
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        username,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth phải dùng trong AuthProvider");
  return context;
}

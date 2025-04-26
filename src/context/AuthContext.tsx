/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getSession, removeSession, saveSession } from "@/utils/AuthUtils";
import React, { createContext, useState, useContext, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import { useRouter } from "next/navigation";
import { ILoginResponse, IUser } from "@/types/ILoginResponse";

interface AuthContextProps {
  isAuthenticated: boolean | undefined;
  user: IUser | undefined;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean|undefined>(undefined);
  const [user, setUser] = useState<IUser>();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      setIsAuthenticated(session.isAuthenticated);
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log(axiosInstance)
      const response = await axiosInstance.post("auth/login", {
        emailAddress: email,
        password: password,
        role: "Admin"
      });
      const data : ILoginResponse = response.data as ILoginResponse;
      saveSession(data as ILoginResponse);

      // Set authentication state
      setUser({
        email: data.email,
        id: data.id,
        name: data.name,
        phoneNumber: data.phoneNumber,
        role: data.role,
      });
      setIsAuthenticated(true);
      return true;
    } catch (error : any) {
      console.error("Login error:", error);
      return error.response?.data?.message || "Login failed";
    }
  };

  const logout = async () => {
    // Clear token and authentication state
    await removeSession();
    setIsAuthenticated(false);
    router.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/users/profile", {
          withCredentials: true,
        });
        console.log("Profile response:", response.data);
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth check failed:", error.response || error);
        setIsAuthenticated(false);
        setUser(null);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(response.data.user);
      setIsAuthenticated(true);
      console.log("Login successful");
      return true;
    } catch (error) {
      console.error("Login error:", error.response || error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/users/logout", {}, { withCredentials: true });
      setUser(null);
      setIsAuthenticated(false);
      console.log("Logged out");
    } catch (error) {
      console.error("Logout error:", error.response || error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

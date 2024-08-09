// src/services/userService.js

import api from "../api/Api";

export const login = async (username, password) => {
  try {
    const response = await api.post("users/login", { username, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

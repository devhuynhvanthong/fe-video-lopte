// src/services/userService.js

import api from "../api/Api";

export const getListFillter = async (params) => {
  try {
      const response = await api.get("link/fillter", { params });
    //   console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
export const createLink = async (params) => {
  try {
    const response = await api.post("link",  params );
    //   console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
export const deleteLink = async (id) => {
  try {
    const response = await api.delete(`link/${id}`);
    //   console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const linkOriginByKey = async (key) => {
  try {
    const response = await api.get(`link/linkOriginByKey/${key}`);
    //   console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

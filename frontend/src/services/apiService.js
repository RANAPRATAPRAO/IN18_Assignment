import axios from "axios";

const API_URL = "http://localhost:5000/api";

const apiService = {
  getRegistrations: async () => {
    try {
      const response = await axios.get(`${API_URL}/registrations`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to fetch registrations");
    }
  },

  createRegistration: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/registrations`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to create registration");
    }
  },

  updateRegistration: async (id, data) => {
    try {
      await axios.put(`${API_URL}/registrations/${id}`, data);
      return { message: "Registration updated successfully" };
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to update registration");
    }
  },

  deleteRegistration: async (id) => {
    try {
      await axios.delete(`${API_URL}/registrations/${id}`);
      return { message: "Registration deleted successfully" };
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to delete registration");
    }
  },
};

export default apiService;

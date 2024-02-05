import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000";

export const getAllUserRole = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/role`);
    return response.data;
  } catch (error) {
    console.error("Error fetching roles data:", error);
    throw error;
  }
};

export const AddUserRole= async (data)=> await axios.post(`${BASE_URL}/role`,data)

export const UpdateUserRole = async (Id, data) =>
  await axios.put(`${BASE_URL}/role/${Id}`, data);

export const DeleteUserRole = async (Id) =>
  await axios.delete(`${BASE_URL}/role/${Id}`);

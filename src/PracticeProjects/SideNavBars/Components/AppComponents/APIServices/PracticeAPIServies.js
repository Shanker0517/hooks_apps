import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000";

// export const AddPractice = {
//   addPractice: async (data) => await axios.post(`${BASE_URL}/practice`, data),
// };

export const getAllPractice = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/practice`);
    return response.data;
  } catch (error) {
    console.error("Error fetching practice data:", error);
    throw error; // You can choose to handle the error here or let the caller handle it
  }
};


export const AddPractice = async (data) => await axios.post(`${BASE_URL}/practice`,data);


export const UpdatePractice = async (Id,data) => await axios.put(`${BASE_URL}/practice/${Id}`,data);

export const DeletePractice = async (Id) => await axios.delete(`${BASE_URL}/practice/${Id}`);

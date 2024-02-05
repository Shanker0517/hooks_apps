import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000";

// export const AddDepartment = {
//   addDepartment: async (data) => await axios.post(`${BASE_URL}/Department`, data),
// };

export const getAllDepartment = async () => {
  const response = await axios.get(`${BASE_URL}/department`);
  return response.data;
};
export const AddDepartment = async (data) =>
  await axios.post(`${BASE_URL}/department`, data);

export const UpdateDepartment = async (Id, data) =>
  await axios.put(`${BASE_URL}/department/${Id}`, data);

export const DeleteDepartment = async (Id) =>
  await axios.delete(`${BASE_URL}/department/${Id}`);

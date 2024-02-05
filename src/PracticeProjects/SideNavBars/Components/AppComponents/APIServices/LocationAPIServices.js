import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000";

// export const AddLocation = {
//   addLocation: async (data) => await axios.post(`${BASE_URL}/Location`, data),
// };

export const getAllLocation = async () => {
  const response = await axios.get(`${BASE_URL}/location`);
  return response.data;
};

export const AddLocation = async (data) =>
  await axios.post(`${BASE_URL}/location`, data);

export const UpdateLocation = async (Id, data) =>
  await axios.put(`${BASE_URL}/location/${Id}`, data);

export const DeleteLocation = async (Id) =>
  await axios.delete(`${BASE_URL}/location/${Id}`);

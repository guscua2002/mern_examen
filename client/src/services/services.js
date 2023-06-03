import axios from "axios";

export const getAllPets = () => axios.get('api/users/');

export const getOnePet = (id) => axios.get(`api/users/${id}`); 

export const createPet = (userInfo) => axios.post('api/users/new', userInfo);

export const updatePet = (id, task) => axios.put(`api/users/update/${id}`, task);

export const deletePet = (id) => axios.delete(`api/users/delete/${id}`); 




 


import axios from "axios";

export const getAllPets = () => axios.get('http://api/users/');

export const getOnePet = (id) => axios.get(`http://api/users/${id}`); 

export const createPet = (userInfo) => axios.post('http://api/users/new', userInfo);

export const updatePet = (id, task) => axios.put(`http://api/users/update/${id}`, task);

export const deletePet = (id) => axios.delete(`http://api/users/delete/${id}`); 




 


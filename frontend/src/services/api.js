import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api/v1';

export const login = async (credentials) => {
    return axios.post(`${API_BASE_URL}/user/login`, credentials);
};

export const signup = async (userData) => {
    return axios.post(`${API_BASE_URL}/user/signup`, userData);
};

export const getEmployees = async () => {
    return axios.get(`${API_BASE_URL}/emp`);
};

export const addEmployee = async (employeeData) => {
    return axios.post(`${API_BASE_URL}/emp`, employeeData);
};

export const editEmployee = async (id, updatedData) => {
    return axios.put(`${API_BASE_URL}/emp/${id}`, updatedData);
};

export const deleteEmployee = async (id) => {
    return axios.delete(`${API_BASE_URL}/emp/${id}`);
};

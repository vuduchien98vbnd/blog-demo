import axiosClient from "./axiosClient";

const API_PATH = '/api/v1/auth';

const login = (username, password) => {
    return axiosClient.post(API_PATH + `/login`, {username, password});
}
const register = (auth) =>{
    
    return axiosClient.post(API_PATH + `/register`, auth);
}

const authService = {
    login,
    register
}

export default authService;
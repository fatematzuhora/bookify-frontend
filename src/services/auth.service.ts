import axios from 'axios';
import { LoginDTO, RegisterDTO } from 'models/auth.model';
import { BASE_URL } from 'config';

export const login = async (credentials: LoginDTO) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/signin`, credentials);
        return data;
    } catch (err) {
        throw (err.response.data);
    }
}

export const register = async (credentials: RegisterDTO) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/signup`, credentials);
        return data;
    } catch (err) {
        throw (err.response.data);
    }
};
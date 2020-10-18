import axios from 'axios';
import { CreatePropertyDTO } from 'models/property.model';
import { BASE_URL } from 'config';

export const createProperty = async (
    credentials: CreatePropertyDTO,
    token: string
) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/property`, credentials, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        return data;
    } catch (err) {
        throw (err.response.data);
    }
};

export const getMyProperties = async (
    token: string
) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/property`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        return data;
    } catch (err) {
        throw (err.response.data);
    }
}
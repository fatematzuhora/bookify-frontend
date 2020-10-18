import axios from 'axios';
import { CreatePropertyDTO } from 'models/property.model';
import { BASE_URL } from 'config';

export const createProperty = async (credentials: CreatePropertyDTO) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/property`, credentials);
        return data;
    } catch (err) {
        throw (err.response.data);
    }
}
import axios from 'axios';
import { config } from '../config';

export const axiosApiUser = axios.create({
    baseURL: config.AUTH_BASE_URL, 
    headers: {
        'Content-Type': 'application/json',
    },
});
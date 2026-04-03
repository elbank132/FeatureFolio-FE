import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

let inMemoryToken: string | null = null;

export const setAuthToken = (token: string | null) => {
    inMemoryToken = token;
};

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    if (inMemoryToken) {
        config.headers.Authorization = `Bearer ${inMemoryToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await apiClient(config);
        return response.data;
    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
};
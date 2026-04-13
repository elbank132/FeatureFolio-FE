import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    config.withCredentials = true;
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const request = async <T>(config: AxiosRequestConfig, retryAttempts: number = 0): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await apiClient(config);
        return response.data;
    } catch (error) {
        const isBadRequest =
            axios.isAxiosError(error) &&
            error.response !== undefined &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (retryAttempts > 0 && !isBadRequest) {
            return await request<T>(config, retryAttempts - 1);
        }
        throw error;
    }
};
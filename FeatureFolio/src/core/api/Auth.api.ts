import type { AuthResponseData } from "../types/response/AuthResponseData";
import { ApiMap } from "./Map.api"
import { request } from "./Request.api"

export const authService = {
    googleLogin: async (credential: string): Promise<AuthResponseData> => {
        const settings = ApiMap.auth.google;
    
        const res = await request<AuthResponseData>({ method: settings.method, url: settings.url, data: credential })
        return res;
    },

    getCurrentUser: async (): Promise<AuthResponseData> => {
        const settings = ApiMap.auth.me;
    
        const res = await request<AuthResponseData>({ method: settings.method, url: settings.url })
        return res;
    }
}
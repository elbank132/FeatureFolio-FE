import type { FinishedUploadingRequest } from "../types/request/FinishedUploadingRequest";
import type { ImageTokensResponse } from "../types/response/ImageTokensResponse";
import { ApiMap } from "./Map.api";
import { request } from "./Request.api";

export const imageService = {
    finishedUploading: async(finishedUploadingRequest: FinishedUploadingRequest) => {
        const settings = ApiMap.images.finishedUploading;
    
        await request({ method: settings.method, url: settings.url, data: finishedUploadingRequest });
    },

    uploadImage: async (image: File, uploadUrl: string) => {
        const headers = {
            'x-ms-blob-type': 'BlockBlob',
            'Content-Type': 'image/jpeg'
        }
        const settings = ApiMap.images.uploadImage(uploadUrl);
    
        await request(
            {
                method: settings.method,
                url: settings.url,
                data: image,
                headers,
            },
            2
        );
    },

    getImageTokens: async (amount: number): Promise<ImageTokensResponse> => {
        const settings = ApiMap.images.getTokens(amount);
    
        const res = await request<ImageTokensResponse>(
            { method: settings.method, url: settings.url }
        );
        return res;
    }
}
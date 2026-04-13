export interface GetEventsResponse {
    eventId: string;
    eventName: string;
    date: Date;
    clusters: DirectoryResponse[]
}

export interface DirectoryResponse {
    images: string[];
}
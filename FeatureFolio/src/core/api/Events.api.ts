import type { CreateEventRequest } from "../types/request/CreateEventRequest";
import type { CreateEventResponse } from "../types/response/CreateEventResponse";
import type { GetEventsResponse } from "../types/response/GetEventsResponse";
import { ApiMap } from "./Map.api"
import { request } from "./Request.api"

export const eventsService = {
    createEvent: async (createEventRequest: CreateEventRequest): Promise<string> => {
        const settings = ApiMap.events.createEvent;

        const res = await request<CreateEventResponse>({ method: settings.method, url: settings.url, data: createEventRequest })
        return res.eventId;
    },

    getEvents: async (): Promise<GetEventsResponse[]> => {
        const settings = ApiMap.events.getEvents;
        const res = await request<GetEventsResponse[]>({
            method: settings.method,
            url: settings.url,
        });
        return res.map((event) => ({
            ...event,
            date: new Date(event.date),
        }));
    },
}
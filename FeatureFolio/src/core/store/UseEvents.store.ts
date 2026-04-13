import { create } from 'zustand';
import type { Event as AppEvent } from '../types/Event';
import { eventsService } from '../api/Events.api';
import type { Directory } from '../types/Directory';
import type { Image } from '../types/Image';
import type { DirectoryResponse, GetEventsResponse } from '../types/response/GetEventsResponse';

function imageFromUrl(url: string): Image {
    return { url };
}

function directoryFromCluster(cluster: DirectoryResponse): Directory {
    return { images: cluster.images.map(imageFromUrl) };
}

function appEventFromResponse(response: GetEventsResponse): AppEvent {
    return {
        date: response.date,
        eventId: response.eventId,
        name: response.eventName,
        directories: response.clusters.map(directoryFromCluster),
    };
}

interface EventsState {
    events: AppEvent[] | [];
    setEvents: (events: AppEvent[]) => void;
    getEvents: () => Promise<AppEvent[]>;
}

export const useEventsStore = create<EventsState>((set) => ({
    events: [],
    setEvents: (events: AppEvent[]) => set({ events }),

    async getEvents(): Promise<AppEvent[]> {
        try {
            const events = (await eventsService.getEvents()).map(appEventFromResponse);
            set({ events });
            return events;
        } catch {
            set({ events: [] });
            return [];
        }
    },
}));
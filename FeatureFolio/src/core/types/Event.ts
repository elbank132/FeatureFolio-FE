import type { Directory } from "./Directory";

export interface Event {
    eventId: string;
    name: string;
    date: Date;
    directories: Directory[];
}
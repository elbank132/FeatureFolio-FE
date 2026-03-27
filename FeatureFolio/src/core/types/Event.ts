import type { Directory } from "./Directory";

export interface Event {
    name: string;
    date: Date;
    description: string;
    directories: Directory[];
}
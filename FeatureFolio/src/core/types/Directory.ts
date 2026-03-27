import type { Image } from "./Image";

export interface Directory {
    id: string;
    name: string;
    images: Image[];
}
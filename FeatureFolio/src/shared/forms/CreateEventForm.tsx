import { Button } from "@/components/ui/button";
import { eventsService } from "@/core/api/Events.api";
import { imageService } from "@/core/api/Images.api";
import { useState } from "react";

type CreateEventFormProps = {
    files: File[];
    onOpenChange: (open: boolean) => void;
};

const inputClassName =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:[color-scheme:dark]";

export function CreateEventForm({ files, onOpenChange }: CreateEventFormProps) {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (eventName.length < 5 || !eventDate) {
            return;
        }

        const [y, m, d] = eventDate.split("-").map(Number);
        const parsedDate = new Date(y, m - 1, d);

        const eventId = await eventsService.createEvent({ eventName, eventDate: parsedDate });
        await uploadEventImages(files, eventId);
        onOpenChange(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Event Name"
                className={inputClassName}
            />
            <div className="flex flex-col gap-1.5">
                <label htmlFor="event-date" className="text-sm font-medium text-foreground">
                    Event date
                </label>
                <input
                    id="event-date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className={inputClassName}
                />
            </div>
            <span>* Make sure you selected all the images from the event, you will not be able to add images to the event later!</span>
            <span className="spacer"></span>
            <span className="font-bold">{files.length} Images will be processed and uploaded</span>
            <Button type="submit" className="w-full h-13">
                Create Event
            </Button>
        </form>
    );
}

const uploadEventImages = async (files: File[], eventId: string) => {
    const imageUploadTokens = await imageService.getImageTokens(files.length);
    const uploadUrls = imageUploadTokens.imageSasUrls;

    const promises = files.map(
        (file, index) => imageService.uploadImage(file, uploadUrls[index])
    );

    await Promise.all(promises);
    await imageService.finishedUploading({eventId});
}
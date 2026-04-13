import { UploadAreaInput } from "./Components/UploadAreaInput";
import { EventCard } from "./Components/EventCard";
import { useEventsStore } from "@/core/store/UseEvents.store";

export const Home = () => {
    const { events } = useEventsStore();

    return (
        <div className="w-[85%] m-auto pt-5 flex flex-col gap-12">
            <UploadAreaInput />

            <div className="flex items-end justify-between">
                <div className="flex flex-col">
                    <span className="text-gold text-xs tracking-wider font-bold">COLLECTIONS</span>
                    <span className="font-bold text-dark-blue text-2xl">Events</span>
                </div>

                <div className="flex gap-1 items-center">
                    <button className="text-gold text-s">View all</button>
                    <img src="/icons/right-arrow.svg" alt="Right Arrow" className="h-2.5 w-2.5"/>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                {events.map((event, i) => (
                    <div key={i}>
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
}
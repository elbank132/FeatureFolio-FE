import { useEffect, useState } from "react";
import { UploadAreaInput } from "./Components/UploadAreaInput";
import type { Event } from "../../core/types/Event";
import { EventCard } from "./Components/EventCard";

export const Home = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        setEvents([
            {
                date: new Date(),
                description: "",
                directories: [
                    {
                        id: "id",
                        name: "omer",
                        images: [
                            {
                                name: "test.jpg",
                                url: "https://images.junebugweddings.com/a7/9f/a79f7d9df21833c4.jpg"
                            }
                        ]
                    }
                ],
                name: "Omer's Wedding"
            },
            {
                date: new Date(),
                description: "",
                directories: [
                    {
                        id: "id2",
                        name: "gal",
                        images: [
                            {
                                name: "test.jpg",
                                url: "https://www.alexbucklandphotography.co.uk/wp-content/uploads/2024/01/first-look-wedding-day-timeline-uk-0001-1024x685.jpg"
                            }
                        ]
                    }
                ],
                name: "Gal's Wedding"
            }
        ])
    }, [])

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

            <div className="flex flex-col gap-5">
                {events.map((event, i) => (
                    <div key={i}>
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
}
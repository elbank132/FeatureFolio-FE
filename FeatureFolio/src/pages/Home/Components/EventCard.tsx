import type { Event } from "../../../core/types/Event"

type EventCardProps = {
    event: Event;
}

const getSeasonNameByDate = (date: Date): string => {
    const month = date.getMonth() + 1; // getMonth is 0-indexed
    if (month === 12 || month === 1 || month === 2) {
        return "WINTER";
    } else if (month >= 3 && month <= 5) {
        return "SPRING";
    } else if (month >= 6 && month <= 8) {
        return "SUMMER";
    } else if (month >= 9 && month <= 11) {
        return "FALL";
    }
    return "";
}

const getImagesAmount = (event: Event) => {
    return event.directories.map(
        dir => dir.images.length
    ).reduce(
        (prev, cur) => prev + cur, 0
    );
}


export const EventCard = ({ event }: EventCardProps) => {
    if (event.directories.length <= 0) {
        return (
            <div>
                No images available for this event yet
            </div>
        )
    }

    return (
        <div className="max-h-[200px] w-full overflow-hidden rounded-2xl flex justify-start items-end">
            <div className="flex flex-col gap-1.5 absolute bg-[#000]/20 rounded-t-2xl rounded-bl-2xl pl-5 pt-2 pb-2 pr-2">
                <div className="flex items-center gap-2">
                    <img src="/icons/directory-light.svg" className="h-3 w-3" />

                    <span className="text-[#FFF]/70 tracking-widest text-xs">
                        {getSeasonNameByDate(event.date)} {event.date.getUTCFullYear()}
                    </span>
                </div>

                <span className="font-bold text-xl text-[#FFF]">
                    {event.name}
                </span>

                <div className="flex justify-start items-center gap-1">
                    <img src="/icons/photos.svg" className="w-3 h-3" />
                    <span className="text-sm text-[#FFF]/60">{getImagesAmount(event)} Photos</span>
                </div>
            </div>

            <img src={event.directories[0].images[0].url} className="h-full w-full" />
        </div>
    )
}
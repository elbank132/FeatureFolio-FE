export const BottomMenu = () => {
    return (
        <div className="flex flex-1 justify-between items-center bg-primary p-3">
            <button className="flex flex-col items-center gap-2 bg-primary">
                <img src="/icons/all-photos.svg" alt="Home" className="w-5 h-5"/>
                <span
                    className="text-on-primary-60 text-[10px] leading-[15px] font-serif"
                >
                    ALL PHOTOS
                </span>
            </button>

            <button className="flex flex-col items-center gap-2 bg-primary">
                <img src="/icons/directories.svg" alt="Home" className="w-5 h-5"/>
                <span
                    className="text-gold text-[10px] leading-[15px] font-serif"
                >
                    DIRECTORIES
                </span>
            </button>

            <button className="flex flex-col items-center gap-2 bg-primary">
                <img src="/icons/settings.svg" alt="Home" className="w-5 h-5"/>
                <span
                    className="text-on-primary-60 text-[10px] leading-[15px] font-serif"
                >
                    SETTINGS
                </span>
            </button>
        </div>
    );
};
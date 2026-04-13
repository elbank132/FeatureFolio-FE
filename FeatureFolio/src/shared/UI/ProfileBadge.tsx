import type { User } from "@/core/types/User";

type ProfileBadgeProps = {
    user?: User | null
};

export const ProfileBadge = ({ user } : ProfileBadgeProps) => {
    const imgUrl = user ? user.pictureUrl : "/icons/unknown-user-badge.svg";

    return (
        <div>
            <img src={ imgUrl } className="w-10 h-10 rounded-[50%]" referrerPolicy="no-referrer"></img>
        </div>
    );
}
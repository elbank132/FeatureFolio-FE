import type { Directory as Directory } from "../../core/types/Directory";

type DirectoryCardProps = {
    directory: Directory;
};

export const DirectoryCard = ({ directory }: DirectoryCardProps) => {
    return(
        <div>{directory.name}</div>
    )
};
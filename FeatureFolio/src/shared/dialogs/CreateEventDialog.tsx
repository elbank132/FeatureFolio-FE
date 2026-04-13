import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CreateEventForm } from "../forms/CreateEventForm";

type CreateEventDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    files: File[];
};

export function CreateEventDialog({ open, onOpenChange, files }: CreateEventDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Event</DialogTitle>
                </DialogHeader>
                <CreateEventForm files={files} onOpenChange={onOpenChange}></CreateEventForm>
                <DialogDescription>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}


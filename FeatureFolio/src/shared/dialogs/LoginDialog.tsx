import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { authService } from "@/core/api/Auth.api";
import { useAuthStore } from "@/core/store/UseAuth.store";
import type { User } from "@/core/types/User";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useState, type ReactNode } from "react";

type LoginDialogProps = {
    children: ReactNode;
};

export function LoginDialog({ children }: LoginDialogProps) {
    const [open, setOpen] = useState(false);
    const { setUser } = useAuthStore();

    const successfulLogin = async (data: CredentialResponse) => {
        if (!data.credential) {
            return;
        }

        const res = await authService.googleLogin(data.credential);
        const resAsUser: User = {
            pictureUrl: res.pictureURL,
            username: res.username
        }
        setUser(resAsUser);
        setOpen(false);
    }

    const failedLogin = () => { }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Log in via Google
                </DialogDescription>
                <GoogleLogin onSuccess={successfulLogin} onError={failedLogin}></GoogleLogin>
            </DialogContent>
        </Dialog>
    )
}
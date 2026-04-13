import { ProfileBadge } from "../../shared/UI/ProfileBadge";
import { LoginDialog } from "../../shared/dialogs/LoginDialog";
import { BottomMenu } from "./BottomMenu";
import { Outlet } from "react-router-dom";
import type { User } from "@/core/types/User";

type MobileLayoutProps = {
  user: User | null
};

export const MobileLayout = ({ user }: MobileLayoutProps) => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="flex items-center justify-between bg-primary px-6 py-4">
        <div className="flex items-center justify-start gap-4">
          <button>
            <img
              src="/icons/hamburger.svg"
              alt=""
              className="h-[12px] w-[18px] text-on-primary"
            />
          </button>
          <h1 className="text-2xl font-bold text-on-primary">FeatureFolio</h1>
        </div>

        <div>
          {
            user ? <ProfileBadge user={user}></ProfileBadge> :
              <LoginDialog>
                <button type="button" className="rounded-full p-0">
                  <ProfileBadge />
                </button>
              </LoginDialog>
          }
        </div>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>

      <div className="flex">
        <BottomMenu />
      </div>
    </div>
  );
};
import { useEffect } from "react";
import { ProfileBadge } from "../../shared/UI/ProfileBadge";
import { BottomMenu } from "./BottomMenu";
import { Outlet } from "react-router-dom";
import { request } from "../../core/api/Request.api";

export const MobileLayout = () => {
  useEffect(() => {
    const fetchUser = async() => {
      await request({
        method: 'GET',
        url: 'images/1'
      })
    }

    fetchUser();
  })

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
          <ProfileBadge></ProfileBadge>
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
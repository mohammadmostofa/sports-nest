"use client";

import { UpdateUserModal } from "@/components/shared/UpdateUser";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // safe image handling
  const imageSrc =
    user?.image && user.image.startsWith("http")
      ? user.image
      : "/default-avatar.png";

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-sm rounded-3xl border border-violet-500/20 bg-[#111827] p-8 shadow-2xl backdrop-blur-md text-white text-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            width={110}
            height={110}
            alt={user?.name || "user"}
            className="rounded-full border-4 border-violet-500/30 object-cover w-[110px] h-[110px]"
          />
        </div>

        {/* User Info */}
        <div className="mt-5 space-y-2">
          <h1 className="text-2xl font-bold text-white">
            {user?.name || "Unknown"}
          </h1>

          <p className="text-sm text-gray-300 break-all">
            {user?.email || "No email"}
          </p>
        </div>

        {/* Update Modal */}
        <div className="mt-6">
          <UpdateUserModal />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
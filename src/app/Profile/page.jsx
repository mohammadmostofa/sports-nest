"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    const { data:session , error } = authClient.useSession();
    const user = session?.user
  
  return (


   <div className="flex justify-center items-center min-h-screen px-4">
  
  <div className="w-full max-w-sm rounded-3xl border border-violet-500/20 bg-[#111827] p-8 shadow-2xl backdrop-blur-md text-white text-center">
    
    <div className="flex justify-center">
      <Image
        src={user?.image}
        width={110}
        height={110}
        alt={user?.name || "image"}
        className="rounded-full border-4 border-violet-500/30 object-cover w-[110px] h-[110px]"
      />
    </div>

    <div className="mt-5 space-y-2">
      <h1 className="text-2xl font-bold text-white">
        {user?.name || 'image'}
      </h1>

      <p className="text-sm text-gray-300 break-all">
        {user?.email}
      </p>
    </div>

    <div className="mt-6">
      <button className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 transition duration-300 font-medium">
        Edit Prifile
      </button>
    </div>

  </div>

</div>


  );
};

export default ProfilePage;
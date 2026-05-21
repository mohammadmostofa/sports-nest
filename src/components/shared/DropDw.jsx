"use client";
import { Button, } from "@heroui/react";
import { useState } from "react";
import {  ChevronDown } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export function ControlledOpenState() {
  // icon menu state
  const [open, setOpen] = useState(false);
  // access user details
  const { data:session ,error } = authClient.useSession();
  const user = session?.user;
   // log out
   const router = useRouter();
   const handleSignOut = async () => {
  try {
    await authClient.signOut();

    toast.success("Logged out successfully");

     router.push("/Login");
  } catch (error) {
    toast.error(error?.message || "Try Again");
  }
};
  




  return (

    <div className="flex items-center justify-center relative">

  <Button
    aria-label="Menu"
    onClick={() => setOpen(!open)}
    className="flex items-center justify-between gap-3 w-60 px-3 py-2 rounded-xl
    border border-white/10 bg-black/5 text-white hover:bg-white/3">
    <div className="flex items-center gap-2 flex-1">
      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
        <Image
          src={user?.image || "/default-avatar.png"}
          width={32}
          height={32}
          alt={user?.name || "user"}
          className="object-cover w-full h-full"
        />
      </div>

      <span className=" text-sm text-white">
        {user?.name || "Guest User"}
      </span>
    </div>

    <ChevronDown
      size={16}
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    />
  </Button>

  {/* condition */}
  {open && (
    <div
      className="absolute top-full mt-2 w-56 rounded-xl border border-white/10 
      bg-black/80 text-white p-2 shadow-2xl z-50"
    >
      <div className="px-3 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
         <Link href={'/Profile'} className="block" > Profile</Link>
      </div>

      <div className="px-3 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
        <Link href={'MyBookings'} className="block" >My Booking</Link>
      </div>

      <div className="px-3 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
        <Link href={"/AddFacility"} className="block" > Add Facility</Link>
      </div>
      <div className="px-3 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
        <Link href={"/ManageMyFacilities"} className="block" > Manage My Facilities</Link>
      </div>

      <div className="my-1 border-t border-white/10" />

      <div className="px-3 py-2 hover:bg-red-500/20 text-red-400 rounded-lg cursor-pointer">
         <button className="block"  onClick={handleSignOut}>  
          LogOut
         </button>
      </div>
    </div>
  )}

  </div>

  );
}